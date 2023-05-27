import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hometest = () => {
  const navigate = useNavigate();

  const handleRDButtonClick = () => {
    navigate('/result', { state: { type: 'RD' } });
  };

  const handleDBButtonClick = () => {
    navigate('/result', { state: { type: 'DB' } });
  };

  const handleAddButtonClick = () => {
    navigate('/add');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleAddButtonClick}>Add</button>

      <div>
        <button onClick={handleRDButtonClick}>RD</button>
        <button onClick={handleDBButtonClick}>DB</button>
      </div>
    </div>
  );
};

export default Hometest;
