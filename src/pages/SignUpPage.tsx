import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import CustomSpinner from '../components/customSpinner';
import useAuth from '../hooks/useAuth';
import { signUp } from '../store/reducers/auth/authActionCreators';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, isAuth, isLoading } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(signUp(username, password));
  };

  if (isLoading)
    return <CustomSpinner style={{ width: '100vw', height: '100vh' }} />;

  if (isAuth) return <Navigate to='/' replace={true} />;

  return (
    <div className='d-sm-flex vh-100 justify-content-center align-items-center'>
      <Form onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={e => setUsername(e.target.value)}
            type='text'
            placeholder='Enter username'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        {error && <p className='text-danger'>{error}</p>}
        <Form.Group className='mt-3'>
          <Button variant='primary' type='submit'>
            SignUp
          </Button>
        </Form.Group>
        <Form.Group className='mt-3'>
          <Button variant='link'>
            <Link to='/login'>
              Already have an account?
              <br /> Login now
            </Link>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SignUpPage;
