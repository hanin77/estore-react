import axios from 'axios';
export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
  
});
export const loggedin = (user) => ({
    type: 'LOGIN_SUCCESS',
    customer: user
  });
export const loginFailure = () => ({
    type: 'LOGIN_FAILURE'
  });
export const logoutRequest = () => ({
    type: 'LOGOUT_REQUEST',
    
  });
export const logoutFailure = () => ({
    type: 'LOGOUT_FAILURE'
  });
export const loggedout = () => ({
    type: 'LOGOUT_SUCCESS'
  });
export const tryToLogin = (email, password) => {
    let user = [];
    return (dispatch) => {
      dispatch(loginRequest());
      return axios.get(`/api/users/?email=${email}&password=${password}`).then((resp) => {
        console.log('respond from express server', resp.data);
        dispatch(loggedin({...resp.data}));      
      }).catch((error)=> {
          console.log(error);
          dispatch(loginFailure());
        });       
    };

}

export const tryToLogout = () => {
  return (dispatch) => {
    dispatch(logoutRequest());
    dispatch(loggedout());
    
  }
}
