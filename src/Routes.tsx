import { Navigate, Outlet, Route, Routes } from 'react-router';
import useAuth from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
    </Routes>
  );
};

const PrivateRoute = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default AppRoutes;
