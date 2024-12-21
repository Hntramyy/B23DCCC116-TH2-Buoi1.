const initialState = {
    currentColor: '#ffffff',
    history: [],
  };
  
  const colorReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_COLOR':
        return {
          ...state,
          currentColor: action.payload,
          history: [...state.history, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default colorReducer;
  