import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface ILoginPage {
  text?: string;
}

const LoginPage = ({ text = 'hellos' }) => {
  return (
    <div className='d-sm-flex vh-100 justify-content-center align-items-center'>
      <Form>
        <h2>{text}</h2>
        <Form.Group className='mb-3' controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='email' placeholder='Enter username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          {text}
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
