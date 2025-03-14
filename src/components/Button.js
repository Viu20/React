// src/components/Button.js
import React from 'react';// Импортируем библиотеку React для работы с компонентами
// Определяем функциональный компонент Button, который принимает два свойства: label и onClick
const Button = ({ label, onClick }) => {
    return (
        // Возвращаем элемент button,
        // который будет реагировать на события клика с помощью функции onClick
        <button onClick={onClick}>
            {label}
        </button>
    );
};
// Экспортируем компонент Button, чтобы его можно было использовать в других частях приложения
export default Button;
