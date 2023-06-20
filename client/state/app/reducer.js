
export default function AppReducer(state = {}, action) {
  switch (action.type) {
    case 'AUTHENTICATED':
      return {
        authenticated: true,
        user: action.user,
        session: action.session
      }
      break;
    default:
      return {
        ...state
      }
  }
}