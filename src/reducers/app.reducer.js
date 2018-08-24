const initialState = {
  details: 0.0
};

export default function app(state = initialState, action) {
  switch(action.type) {
    case 'SET_APP_DETAILS':
      return {
        ...state,
        details: action.payload
      };
  }

  return state;
}