import React from 'react';

const ChildComponent = ({ data }) => {
  return (
    <div className='shivam'>
      <h2>Child Component</h2>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
      <p>Gmail:{data.gmail}</p>
    </div>
  );
};

export default ChildComponent; 