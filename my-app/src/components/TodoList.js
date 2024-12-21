import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TodoComponent = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todoList.tasks);

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTask('');
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Nhập công việc..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Thêm</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
