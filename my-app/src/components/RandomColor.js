import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RandomColorComponent = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.currentColor);

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    dispatch({ type: 'CHANGE_COLOR', payload: randomColor }); 
  };

  return (
    <div>
      <h2>random color</h2>
      <div
        className="random-color-box"
        style={{ backgroundColor: currentColor, height: '100px', width: '100px' }} 
      ></div>
      <button onClick={getRandomColor}>Thay đổi màu</button>
    </div>
  );
};

export default RandomColorComponent;
