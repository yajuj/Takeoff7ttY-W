import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

interface IModalComponent {
  str?: string;
  title: string;
  btnTitle: string;
  submit: (str: string) => void;
}

const ModalComponent: React.FC<IModalComponent> = ({
  children,
  str = '',
  title,
  btnTitle,
  submit,
}) => {
  const [value, setValue] = useState(str);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setValue('');
  };
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    submit(value);
    setValue('');
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant='transperent' onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>Имя</Form.Label>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            type='text'
            className='mb-2'
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            {btnTitle}
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
