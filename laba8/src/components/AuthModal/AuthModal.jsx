import React, { useState } from 'react';
import {
  Modal,
  Box,
  TextField,
  Button,
  Tabs,
  Tab,
  Alert
} from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
};

// Улучшенная безопасность хранилища
const safeStorage = {
  get: (key, defaultValue = []) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Storage error:', error);
      return defaultValue;
    }
  },
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Storage error:', error);
      return false;
    }
  },
  remove: (key) => {
    localStorage.removeItem(key);
  }
};

// Генерация ID (простая реализация для демонстрации)
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

export default function AuthModal({ open, onClose, onLoginSuccess }) {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPassword('');
    setRole('user');
    setError('');
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const users = safeStorage.get('users', []);
    const normalizedEmail = email.trim().toLowerCase();

    if (tabValue === 0) { // Вход
      const user = users.find(u => 
        u.email.toLowerCase() === normalizedEmail && 
        u.password === password // В реальном приложении должно быть хеширование
      );

      if (!user) {
        setError('Неверные email или пароль');
        return;
      }

      if (user.status === 'blocked') {
        setError('Пользователь заблокирован');
        return;
      }

      // Обновляем текущего пользователя
      if (safeStorage.set('currentUser', user)) {
        onLoginSuccess(user);
        onClose();
        resetForm();
      } else {
        setError('Ошибка сохранения данных');
      }
    } else { // Регистрация
      // Валидация данных
      if (!name || !email || !password) {
        setError('Все поля обязательны');
        return;
      }

      if (!validateEmail(email)) {
        setError('Введите корректный email');
        return;
      }

      if (!validatePassword(password)) {
        setError('Пароль должен содержать минимум 6 символов');
        return;
      }

      if (users.some(u => u.email.toLowerCase() === normalizedEmail)) {
        setError('Пользователь с таким email уже существует');
        return;
      }

      const newUser = {
        id: generateId(), // Более надежный ID
        name: name.trim(),
        email: normalizedEmail,
        password, // В реальном приложении должно быть хеширование!
        role: role === 'admin' ? 'user' : role, // Запрещаем создавать админов через интерфейс
        status: 'active',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Атомарное обновление данных
      const updatedUsers = [...users, newUser];
      if (safeStorage.set('users', updatedUsers) && safeStorage.set('currentUser', newUser)) {
        onLoginSuccess(newUser);
        onClose();
        resetForm();
      } else {
        setError('Ошибка сохранения данных');
      }
    }
  };

  return (
    <Modal open={open} onClose={() => {
      onClose();
      resetForm();
    }}>
      <Box sx={modalStyle}>
        <Tabs 
          value={tabValue} 
          onChange={(e, newVal) => {
            setTabValue(newVal);
            setError('');
          }} 
          centered
        >
          <Tab label="Вход" />
          <Tab label="Регистрация" />
        </Tabs>

        {error && (
          <Alert severity="error" sx={{ my: 2 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          {tabValue === 1 && (
            <>
              <TextField
                label="Имя"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                inputProps={{ maxLength: 50 }}
              />
              
              <TextField
                select
                label="Роль"
                fullWidth
                margin="normal"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                SelectProps={{ native: true }}
                disabled // Отключаем выбор роли для обычной регистрации
              >
                <option value="user">Пользователь</option>
                {/* Админа можно создавать только через специальный интерфейс */}
              </TextField>
            </>
          )}

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputProps={{ maxLength: 100 }}
          />

          <TextField
            label="Пароль"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            inputProps={{ minLength: 6, maxLength: 50 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            disabled={!email || (tabValue === 1 && !name) || !password}
          >
            {tabValue === 0 ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}