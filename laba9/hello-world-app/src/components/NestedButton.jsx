/*import React from 'react';
import PropTypes from 'prop-types';

const NestedButton = ({ stopPropagation = false }) => {
  // Обработчик для внешней кнопки
  const handleOuterClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation(); // Останавливаем всплытие, если пропс true
    }
    alert('Сработал клик по внешней кнопке!');
  };

  // Обработчики для внутренней кнопки
  const handleInnerPrimaryClick = (e) => {
    e.stopPropagation(); // Всегда останавливаем для первого обработчика
    alert('Первый обработчик внутренней кнопки');
  };

  const handleInnerSecondaryClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    alert('Второй обработчик внутренней кнопки');
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px dashed #4a90e2',
      borderRadius: '8px',
      margin: '15px',
      maxWidth: '400px'
    }}>
      /* Внешняя кнопка */
      /*<button 
        onClick={handleOuterClick}
        style={{
          padding: '12px 20px',
          margin: '10px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        {/* Текст и иконка внешней кнопки */
        /*<span style={{ marginRight: '8px' }}>🛡️</span>
        Главная кнопка
        <div style={{ fontSize: '12px', marginTop: '5px' }}>
          Нажмите меня, чтобы увидеть сообщение
        </div>
        
        {/* Внутренняя кнопка */
        /*<button 
          onClick={(e) => {
            handleInnerPrimaryClick(e);
            handleInnerSecondaryClick(e);
          }}
          style={{
            padding: '8px 15px',
            margin: '10px 0',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'block',
            width: '100%'
          }}
        >
          /* Текст и иконка внутренней кнопки */
          /*<span style={{ marginRight: '8px' }}>⚙️</span>
          Вложенная кнопка
          <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>
            У меня два обработчика клика
          </div>
        </button>
      </button>
    </div>
  );
};

NestedButton.propTypes = {
  stopPropagation: PropTypes.bool
};

export default NestedButton;*/

/*import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NestedButton = ({ stopPropagation = false }) => {
  const [isInnerVisible, setInnerVisible] = useState(true);

  // Обработчик для внешней кнопки
  const handleOuterClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
      alert('Обработчик внешней кнопки');
    }
    setInnerVisible(!isInnerVisible); // Переключаем видимость внутренней кнопки
    alert('Внешняя кнопка: внутренняя кнопка ' + 
          (isInnerVisible ? 'скрыта' : 'показана'));
  };

  // Обработчики для внутренней кнопки
  const handleInnerClick1 = (e) => {
    e.stopPropagation();
    alert('Первый обработчик внутренней кнопки');
  };

  const handleInnerClick2 = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    alert('Второй обработчик внутренней кнопки');
  };

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px dashed #4a90e2',
      borderRadius: '8px',
      margin: '15px',
      maxWidth: '400px'
    }}>
      {/* Внешняя кнопка */
      /*<button 
        onClick={handleOuterClick}
        style={{
          padding: '12px 20px',
          margin: '10px',
          backgroundColor: '#4a90e2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
          position: 'relative' // Для позиционирования внутренней кнопки
        }}
      >
        <span style={{ marginRight: '8px' }}>🛡️</span>
        {isInnerVisible ? 'Скрыть внутреннюю кнопку' : 'Показать внутреннюю кнопку'}
        
        {/* Внутренняя кнопка (условный рендеринг) */
        /*{isInnerVisible && (
          <button 
            onClick={(e) => {
              handleInnerClick1(e);
              handleInnerClick2(e);
            }}
            style={{
              padding: '8px 15px',
              margin: '10px 0',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              cursor: 'pointer',
              display: 'block',
              width: '100%'
            }}
          >
            <span style={{ marginRight: '8px' }}>⚙️</span>
            Вложенная кнопка
            <div style={{ fontSize: '11px', color: '#666', marginTop: '3px' }}>
              У меня два обработчика клика
            </div>
          </button>
        )}
      </button>
    </div>
  );
};

NestedButton.propTypes = {
  stopPropagation: PropTypes.bool
};

export default NestedButton;*/

//убрать скрытие кнопки, написать тесты. 4 теста: 1- проверяет нажатие внутренней кнопки, 2- нажатие внешней. булик- true 2 теста и false -2 теста

import React from 'react';
import PropTypes from 'prop-types';

const NestedButton = ({ stopPropagation = false }) => {
  // Обработчик для внешней кнопки
  const handleOuterClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    alert('Внешняя кнопка clicked');
  };

  // Обработчик для внутренней кнопки
  const handleInnerClick = (e) => {
    if (stopPropagation) {
      e.stopPropagation();
    }
    alert('Внутренняя кнопка clicked - 1');
    
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      
      <div
        onClick={handleOuterClick}
        role="button"
        tabIndex="0"
        data-testid="outer-button"
        style={{ 
          padding: '10px', 
          margin: '5px',
          cursor: 'pointer',
          border: '1px solid #999'
        }}
      >
        Outer Button
        
        <button 
          onClick={handleInnerClick}
          data-testid="inner-button"
          style={{ 
            padding: '8px', 
            margin: '5px', 
            backgroundColor: '#f0f0f0',
            display: 'block'
          }}
        >
          Inner Button
        </button>
      </div>
    </div>
  );
};

NestedButton.propTypes = {
  stopPropagation: PropTypes.bool
};

export default NestedButton;

