import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Content labId={0} />} />
              <Route path="/lab1" element={<Content labId={1} />} />
              <Route path="/lab2" element={<Content labId={2} />} />
              <Route path="/lab3" element={<Content labId={3} />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;