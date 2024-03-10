import React from 'react';
import Button from './Button';

const Form = () => {
  const handleSubmit = () => {
    // Handle form submission
  };

  const handleReset = () => {
    // Handle form reset
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <Button label="Submit" color="green" onClick={handleSubmit} />
        <Button label="Reset" color="red" onClick={handleReset} />
      </form>
    </div>
  );
};

export default Form;
