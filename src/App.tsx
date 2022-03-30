import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NavbarComponent from './components/navbar';
import useAuth from './hooks/useAuth';
import AppRoutes from './Routes';
import { logout } from './store/reducers/auth/authActionCreators';
import { checkAuthLocalStorage } from './store/reducers/auth/authActionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthLocalStorage());
  }, []);

  const { isAuth } = useAuth();

  return (
    <React.Fragment>
      <NavbarComponent
        isAuth={isAuth}
        logout={() => {
          dispatch(logout());
        }}
      />
      <AppRoutes />
    </React.Fragment>
  );
};

export default App;
