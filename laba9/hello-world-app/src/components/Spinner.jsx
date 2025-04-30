import React from 'react';
import './Spinner.css';

const Spinner = ({ small = false }) => {
  return (
    <div className={`spinner-container ${small ? 'small' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;