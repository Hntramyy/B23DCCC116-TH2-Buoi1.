// actions.js

export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const setImages = (images) => ({
    type: 'SET_IMAGES',
    payload: images,
  });
  
  export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    payload: color,
  });
  
  export const undoColor = () => ({
    type: 'UNDO_COLOR',
  });
  
  export const startAutoChange = () => ({
    type: 'START_AUTO_CHANGE',
  });
  