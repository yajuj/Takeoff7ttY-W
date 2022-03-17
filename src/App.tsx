import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route element={<MainPage />} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const PrivateRoute: React.FC = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to='/login' />;
};

export default App;
