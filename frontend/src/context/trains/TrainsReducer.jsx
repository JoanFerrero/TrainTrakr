export default function TrainsReducer(state, action) {
  switch(action.type) {
    case 'SET_TRAINS':
      return {
        ...state,
        trains: action.payload,
      };
    case 'ADD_TRAIN':
      return {
        ...state,
        trains: [...state.trains, action.payload],
      }
    case 'EDIT_TRAIN':
      return {
        ...state,
        trains: state.trains.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    case 'DELETE_TRAIN':
      return {
        ...state,
        trains: state.trains.filter(item => item.slug !== action.payload)
      }
    default:
      return state;
  }
}