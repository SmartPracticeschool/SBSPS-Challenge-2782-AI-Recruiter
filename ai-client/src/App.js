import React from 'react';
import { RouterContent } from './container/routes';
import {Provider} from 'react-redux';
import { rootStore } from './redux';
import { setToken } from './component/service/setToken';
import jwtDecode from 'jwt-decode'
import { UserAuth, UserLogout } from './redux/actionCreater/user';
const store = rootStore();


if(localStorage.jwtToken){
  setToken(localStorage.jwtToken);
  try{
       store.dispatch(UserAuth(jwtDecode(localStorage.jwtToken)))

  }catch(err){
     store.dispatch(UserLogout())
  }
}

function App() {
  return (
    <Provider store={store}>
     <RouterContent />
     </Provider>
  );
}

export default App;
