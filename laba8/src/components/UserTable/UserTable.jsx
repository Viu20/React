/*import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TableSortLabel
} from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';

const DraggableColumnHeader = ({ header, table }) => {
  const { column } = header;
  const [, drag] = useDrag({
    type: 'COLUMN',
    item: () => ({
      id: column.id,
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'COLUMN',
    drop: (draggedItem) => {
      if (draggedItem.id !== column.id) {
        table.setColumnOrder((old) => {
          const draggedIndex = old.indexOf(draggedItem.id);
          const targetIndex = old.indexOf(column.id);
          const newOrder = [...old];
          newOrder.splice(draggedIndex, 1);
          newOrder.splice(targetIndex, 0, draggedItem.id);
          return newOrder;
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <TableCell
      ref={(node) => drag(drop(node))}
      colSpan={header.colSpan}
      style={{
        opacity: isOver ? 0.5 : 1,
        cursor: 'move',
        userSelect: 'none',
        backgroundColor: isOver ? '#f5f5f5' : 'inherit',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {flexRender(column.columnDef.header, header.getContext())}
        {column.getCanSort() && (
          <TableSortLabel
            active={column.getIsSorted()}
            direction={column.getIsSorted() || 'asc'}
            onClick={column.getToggleSortingHandler()}
          />
        )}
      </Box>
    </TableCell>
  );
};

export default function UserTable({
  columns,
  data,
  onDelete,
  onBlock,
  onEdit
}) {
  const [columnOrder, setColumnOrder] = useState(columns.map(c => c.accessorKey));

  const table = useReactTable({
    data,
    columns,
    state: {
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        maxWidth: '100%', 
        overflowX: 'auto',
        '& .sticky-column': {
          position: 'sticky',
          left: 0,
          zIndex: 1,
          backgroundColor: 'background.paper',
        }
      }}
    >
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <DraggableColumnHeader 
                  key={header.id} 
                  header={header}
                  table={table}
                />
              ))}
              <TableCell>Действия</TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <TableCell 
                  key={cell.id} 
                  className={index === 0 ? 'sticky-column' : ''}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <TableCell className="sticky-column">
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onEdit(row.original)}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color={row.original.status === 'active' ? 'warning' : 'success'}
                    onClick={() => onBlock(row.original.id)}
                  >
                    {row.original.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => onDelete(row.original.id)}
                  >
                    Удалить
                  </Button>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}*/

import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  TableSortLabel,
  Typography
} from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';

// Компонент для отображения пароля (скрыт для администратора)
const PasswordCell = ({ password, isAdmin }) => {
  return isAdmin ? '••••••••' : password;
};

// DraggableColumnHeader остается без изменений
const DraggableColumnHeader = ({ header, table }) => {
  const { column } = header;
  const [, drag] = useDrag({
    type: 'COLUMN',
    item: () => ({
      id: column.id,
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'COLUMN',
    drop: (draggedItem) => {
      if (draggedItem.id !== column.id) {
        table.setColumnOrder((old) => {
          const draggedIndex = old.indexOf(draggedItem.id);
          const targetIndex = old.indexOf(column.id);
          const newOrder = [...old];
          newOrder.splice(draggedIndex, 1);
          newOrder.splice(targetIndex, 0, draggedItem.id);
          return newOrder;
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <TableCell
      ref={(node) => drag(drop(node))}
      colSpan={header.colSpan}
      style={{
        opacity: isOver ? 0.5 : 1,
        cursor: 'move',
        userSelect: 'none',
        backgroundColor: isOver ? '#f5f5f5' : 'inherit',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {flexRender(column.columnDef.header, header.getContext())}
        {column.getCanSort() && (
          <TableSortLabel
            active={column.getIsSorted()}
            direction={column.getIsSorted() || 'asc'}
            onClick={column.getToggleSortingHandler()}
          />
        )}
      </Box>
    </TableCell>
  );
};

const UserTable = ({
  data,
  onDelete,
  onBlock,
  onEdit,
  currentUser
}) => {
  const [columnOrder, setColumnOrder] = useState(['id', 'name', 'email', 'role', 'password']);

  const tableColumns = [
    { 
      accessorKey: 'id',
      header: 'ID',
      size: 70
    },
    { 
      accessorKey: 'name', 
      header: 'Имя',
      cell: info => info.getValue()
    },
    { 
      accessorKey: 'email', 
      header: 'Email',
      cell: info => info.getValue()
    },
    { 
      accessorKey: 'role', 
      header: 'Роль',
      cell: info => (
        <span style={{ 
          fontWeight: 'bold', 
          color: info.getValue() === 'admin' ? '#1976d2' : 'inherit'
        }}>
          {info.getValue() === 'admin' ? 'Администратор' : 'Пользователь'}
        </span>
      )
    },
    { 
      accessorKey: 'status', 
      header: 'Статус',
      cell: info => (
        <span style={{ 
          color: info.getValue() === 'active' ? 'green' : 'red',
          fontWeight: 'bold'
        }}>
          {info.getValue() === 'active' ? 'Активен' : 'Заблокирован'}
        </span>
      )
    },
    {
      accessorKey: 'password',
      header: 'Пароль',
      cell: info => info.getValue() // Значения паролей обрабатываются в UserTable
    }
  ];
  

  const table = useReactTable({
    data,
    columns: tableColumns,
    state: {
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Панель администратора
      </Typography>
      
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Управление пользователями
      </Typography>

      <TableContainer 
        component={Paper} 
        sx={{ 
          maxWidth: '100%', 
          overflowX: 'auto',
          mt: 2,
          '& .sticky-column': {
            position: 'sticky',
            left: 0,
            zIndex: 1,
            backgroundColor: 'background.paper',
          }
        }}
      >
        <Table>
          <TableHead>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <DraggableColumnHeader 
                    key={header.id} 
                    header={header}
                    table={table}
                  />
                ))}
                <TableCell>Действия</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell 
                    key={cell.id} 
                    className={index === 0 ? 'sticky-column' : ''}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
                <TableCell className="sticky-column">
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => onEdit(row.original)}
                    >
                      Редактировать
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      color={row.original.status === 'active' ? 'warning' : 'success'}
                      onClick={() => onBlock(row.original.id)}
                    >
                      {row.original.status === 'active' ? 'Заблокировать' : 'Разблокировать'}
                    </Button>
                    <Button
                      variant="outlined"
                      size="small"
                      color="error"
                      onClick={() => onDelete(row.original.id)}
                    >
                      Удалить
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;