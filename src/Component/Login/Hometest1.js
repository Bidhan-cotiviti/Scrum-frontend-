import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hometest1 = () => {
  const navigate = useNavigate();

  const handleRDButtonClick = () => {
    navigate('/result', { state: { type: 'RD' } });
  };

  const handleDBButtonClick = () => {
    navigate('/result', { state: { type: 'DB' } });
  };

  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <button onClick={handleRDButtonClick}>RD</button>
        <button onClick={handleDBButtonClick}>DB</button>
    </div>
  );
};

export default Hometest1;
