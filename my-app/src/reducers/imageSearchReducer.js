const initialState = {
    images: [],
    isLoading: false,
    error: null,
  };
  
  const imageSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_IMAGE_REQUEST':
        return { ...state, isLoading: true, error: null };
      case 'SEARCH_IMAGE_SUCCESS':
        return { ...state, images: action.payload, isLoading: false };
      case 'SEARCH_IMAGE_FAILURE':
        return { ...state, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  
  export default imageSearchReducer;
  