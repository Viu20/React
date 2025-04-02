import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  const labs = [
    { id: 1, title: 'Лабораторная 1' },
    { id: 2, title: 'Лабораторная 2' },
    { id: 3, title: 'Лабораторная 3' }
  ];

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Главная</Link></li>
        {labs.map(lab => (
          <li key={lab.id}>
            <Link to={`/lab${lab.id}`}>{lab.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;