import React from 'react';
import StudentCard from './StudentCard';
import Form from './Form';
import StudentList from './StudentList';

const App = () => {
  return (
    <div className="app">
      
      <StudentCard name="Shivam Gupta" age={25} course="MERN Stack" />

      
      <Form />

      
      <StudentList />
    </div>
  );
};

export default App;
