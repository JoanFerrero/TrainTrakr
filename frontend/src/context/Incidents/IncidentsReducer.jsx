export default function NotificationsReducer(state, action) {
  switch(action.type) {
    case 'SET_INCIDENTS_TRAIN':
      return {
        ...state,
        incidentsTrain: action.payload,
      };
    case 'SET_INCIDENTS_CHAIR':
      return {
        ...state,
        incidentsChair: action.payload,
      };
    case 'EDIT_INCIDENTS_TRAIN':
      return {
        ...state,
        incidentsTrain: state.incidentsTrain.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    case 'EDIT_INCIDENTS_CHAIR':
      return {
        ...state,
        incidentsChair: state.incidentsChair.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    default:
      return state;
  }
}