import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RandomColorComponent = () => {
  const dispatch = useDispatch();
  const currentColor = useSelector((state) => state.currentColor); // Lấy màu hiện tại từ Redux store

  const getRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`; // Tạo màu ngẫu nhiên
    dispatch({ type: 'CHANGE_COLOR', payload: randomColor }); // Dispatch action để thay đổi màu
  };

  return (
    <div>
      <h2>Ô màu ngẫu nhiên</h2>
      <div
        className="random-color-box"
        style={{ backgroundColor: currentColor, height: '100px', width: '100px' }} // Đặt màu nền
      ></div>
      <button onClick={getRandomColor}>Thay đổi màu</button>
    </div>
  );
};

export default RandomColorComponent;
