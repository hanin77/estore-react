
const initialState = { loggedIn: false, loggingOut: false, loggingIn: false,id: "", address:{}, name: {}, email:'', username:'', phone:''};
export default (state = initialState, action) => {
  console.log(action.customer);
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loggingIn: true
      };
    case 'LOGIN_SUCCESS':
      const {id, address, name, email, username, phone} = action.customer;
      return {
          ...state,
          id,
          address,
          email,
          name,
          username,
          phone,
          loggedIn: true,
          loggingIn: false
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          ...initialState
        };
      case 'LOGOUT_REQUEST':
        return {
        ...state,
        loggingOut: true
      };
      case 'LOGOUT_FAILURE':
        return {
          ...state,
          loggingOut: false
      };
      case 'LOGOUT_SUCCESS':
          return {
            ...state,
            ...initialState
          };
    default:
      return state;
  }
};