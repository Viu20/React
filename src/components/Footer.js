import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Лабораторные работы по React</p>
      </div>
    </footer>
  );
};

export default Footer;