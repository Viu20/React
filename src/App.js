// src/App.js
import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Nav from './components/Nav';

function App() {
    const handleClick = () => {
        alert('Hello, World!');
    };

    return (
        <>
            <Nav />
            <Container>
                <h1>Hello World App</h1>
                <Button onClick={handleClick} label="Click me!" />
            </Container>
        </>
    );
}

export default App;

