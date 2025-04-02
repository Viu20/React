import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} style={{ padding: '8px 16px' }}>
    {label}
  </button>
);

export default Button; // Используем default export

