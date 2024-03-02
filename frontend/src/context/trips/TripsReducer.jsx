export default function TripsReducer(state, action) {
  switch(action.type) {
    case 'SET_TRIPS':
      return {
        ...state,
        trips: action.payload,
      };
    case 'ADD_TRIPS':
      return {
        ...state,
        trips: [...state.trips, action.payload],
      }
    case 'EDIT_TRIPS':
      return {
        ...state,
        trips: state.trips.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    case 'DELETE_TRIPS':
      return {
        ...state,
        trips: state.trips.filter(item => item.slug !== action.payload)
      }
    case 'STATION_FILTER':
      return {
        ...state,
        station_filter: action.payload,
      }
    default:
      return state;
  }
}