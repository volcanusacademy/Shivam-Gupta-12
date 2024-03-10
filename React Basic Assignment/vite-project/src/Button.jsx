import React from 'react';

const Button = ({ label, color, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
