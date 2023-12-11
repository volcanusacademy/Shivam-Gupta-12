import React from 'react';
import ChildComponent from './ChildComponent';

const Person = () => {

  const data = {
    name: 'Shivam Gupta',
    age: 25,
    city: 'Indore',
    gmail:"shivam@123321"
  };

  return (
    <div className='shivam'>
      <h1>Person Component</h1>
         
      <ChildComponent data={data} />
    </div>
  );
};

export default Person;