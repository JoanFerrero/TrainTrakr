export default function NotificationsReducer(state, action) {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'UPDATE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.map(item => {
          if(item.id === action.payload.id) {
            return action.payload;
          }
          return item;
          })
      }
    case 'SET_NOTIFICATION_NOT_SEEN':
      return {
        ...state,
        notificationsNotSeen: action.payload
      }
    case 'UPDATE_NOTIFICATION_NOT_SEEN':
      return {
        ...state,
        notificationsNotSeen: state.notificationsNotSeen.filter(item => item.id !== action.payload.id)
      }
    case 'SET_COUNTER':
      return {
        ...state,
        countNotSeen: action.payload
      }
    case 'UPDATE_COUNTER':
      return {
        ...state,
        countNotSeen: state.countNotSeen - 1
      }
    default:
      return state;
  }
}