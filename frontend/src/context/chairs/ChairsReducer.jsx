export default function ChairsReducer(state, action) {
  switch(action.type) {
    case 'SET_CHAIRS':
      return {
        ...state,
        chairs: action.payload,
      };
    case 'ADD_CHAIRS':
      return {
        ...state,
        chairs: [...state.chairs, action.payload],
      }
    case 'EDIT_CHAIR':
      return {
        ...state,
        chairs: state.chairs.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    case 'DELETE_CHAIR':
      return {
        ...state,
        chairs: state.chairs.filter(item => item.slug !== action.payload)
      }
    default:
      return state;
  }
}