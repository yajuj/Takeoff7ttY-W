import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppRoutes from './Routes';
import { checkAuthLocalStorage } from './store/reducers/auth/authActionCreators';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuthLocalStorage());
  }, []);
  return <AppRoutes />;
};

export default App;
