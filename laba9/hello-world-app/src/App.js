// Импорт основной библиотеки React
import React from 'react'
// Импорт компонента PostsList из соответствующего файла
import PostsList from './components/PostsList'
// Импорт CSS стилей для компонента PostsList
import './components/PostsList.css'
// Импорт компонента Button из файла Button.js
import Button from './Button'
// Импорт компонента NestedButton
import NestedButton from './components/NestedButton';

// Определение функционального компонента App
function App() {
  // Возвращаем JSX разметку приложения
  return (
    // Основной контейнер приложения с классом App
    <div className="App">
      {/* Блок с существующими компонентами */}
      <div style={{ marginBottom: '40px' }}>
        {/* Рендер компонента PostsList (список постов) */}
        <PostsList />
        
        {/* Рендер компонента Button с пропсами:
            - onClick: обработчик клика (выводит 'Clicked!' в консоль)
            - children: текст кнопки ('Test Button') */}
        <Button onClick={() => console.log('Clicked!')}>Test Button</Button>
      </div>

      {/* Новый блок с NestedButton без изменений существующего кода */}
      <div style={{ 
        padding: '20px', 
        borderTop: '1px solid #eee',
        marginTop: '20px'
      }}>
        <h2>Демонстрация вложенной кнопки</h2>
        <NestedButton stopPropagation={true} />
      </div>
    </div>
  )
}

// Экспорт компонента App по умолчанию
export default App