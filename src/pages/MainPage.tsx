import React from 'react';
import { Button, Col, Form, ListGroup, Row, Stack } from 'react-bootstrap';

const MainPage = () => {
  return (
    <div className='container my-5'>
      <Row>
        <Col sm={6} className='mx-auto'>
          <Stack direction='horizontal' gap={3}>
            <Form.Control className='me-auto' placeholder='Введите имя...' />
            <Button variant='secondary'>Искать</Button>
          </Stack>
          <div className='my-3'></div>
          <ListGroup>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default MainPage;
