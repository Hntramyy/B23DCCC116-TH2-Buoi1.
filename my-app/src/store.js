import { createStore } from 'redux';

// Khởi tạo trạng thái ban đầu
const initialState = {
  todoList: {
    tasks: [],
  },
  imageSearchResults: [],
  currentColor: '#ffffff', // Màu mặc định
};

// Hàm reducer để xử lý các action
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        todoList: {
          tasks: [...state.todoList.tasks, action.payload],
        },
      };
    case 'SET_IMAGES':
      return {
        ...state,
        imageSearchResults: action.payload,
      };
    case 'CHANGE_COLOR':
      return {
        ...state,
        currentColor: action.payload, // Thay đổi màu hiện tại
      };
    default:
      return state;
  }
};

// Tạo store từ rootReducer
const store = createStore(rootReducer);

export default store;
