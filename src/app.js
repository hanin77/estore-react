import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/styles.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

  // Store creation
  const store = configureStore();
  store.subscribe(()  => {
    const state = store.getState();
    if(!state.authentication.loggedIn && !state.authentication.loggingIn){
      localStorage.setItem('reduxState', JSON.stringify(state));
    }
    console.log('from listner',state);
    console.log('from listner localStorage',JSON.parse(localStorage.getItem('reduxState')));
  });
  
  
  const jsx = (<Provider store={store}>
                <AppRouter />
              </Provider>);

ReactDOM.render(jsx, document.getElementById('app'));
  

