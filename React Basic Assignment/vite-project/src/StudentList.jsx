// StudentList.jsx
import React, { useState } from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  const addStudent = () => {
    const newStudent = {
      name: `Student ${students.length + 1}`,
      age: 18,
      course: 'New Course'
    };
    setStudents([...students, newStudent]);
  };

  const removeStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <div className="student-list">
      <button onClick={addStudent}>Add Student</button>
      {students.map((student, index) => (
        <div key={index}>
          <StudentCard
            name={student.name}
            age={student.age}
            course={student.course}
          />
          <button onClick={() => removeStudent(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
