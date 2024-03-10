import React, { useState } from 'react';

const StudentCard = ({ name, age, course }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="student-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
};

export default StudentCard;
