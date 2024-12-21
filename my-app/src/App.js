import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(''); 
  const [imageSearch, setImageSearch] = useState(''); 
  const [randomColor, setRandomColor] = useState('#ffffff'); 
  const tasks = useSelector((state) => state.todoList.tasks); 
  const imageResults = useSelector((state) => state.imageSearchResults); 

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch({ type: 'ADD_TASK', payload: newTask }); 
      setNewTask(''); 
    } else {
      alert("Vui lòng nhập một công việc!"); 
    }
  };

const handleImageSearch = async () => {
  if (imageSearch.trim()) {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${imageSearch}&client_id=YOUR_UNSPLASH_ACCESS_KEY`
      );
      dispatch({ type: 'SET_IMAGES', payload: response.data.results }); 
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Không thể tìm thấy hình ảnh. Vui lòng thử lại sau."); 
    }
  } else {
    alert("Vui lòng nhập chủ đề để tìm kiếm hình ảnh!");
  }
};

  const handleChangeColor = () => {
    const randomHex = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setRandomColor(randomHex); 
  };

  return (
    <div className="App">
      <h1>APP</h1>
      <div className="container">
        <div className="box">
          <h2>Todo List</h2>
          <div class="box1">
           <input
             type="text"
             placeholder="Nội dung công việc"
             value={newTask}
             onChange={(e) => setNewTask(e.target.value)} 
           />
           <button onClick={handleAddTask}>Thêm</button>
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li> 
            ))}
          </ul>
        </div>
        <div className="box">
          <h2>Tìm kiếm hình ảnh</h2>
          <div class="box1">
           <input
             type="text"
             placeholder="Tìm kiếm hình ảnh"
             value={imageSearch}
             onChange={(e) => setImageSearch(e.target.value)} 
           />
           <button onClick={handleImageSearch}>Tìm </button>
          </div>
          <h3>Kết quả tìm kiếm:</h3>
          <ul className="image-results">
            {imageResults.map((image) => (
              <li key={image.id}>
                <img src={image.urls.small} alt={image.alt_description} />
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <h2>Random color</h2>
          <button onClick={handleChangeColor}>Change backgroundColor</button>
          <div
            className="random-color-box"
            style={{ backgroundColor: randomColor, height: '100px', width: '100px' }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
