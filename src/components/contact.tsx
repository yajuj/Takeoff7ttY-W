import React from 'react';
import { Button } from 'react-bootstrap';
import { BsPencilFill, BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { IContact } from '../models/contact-model';
import {
  removeContactAsync,
  updateContactAsync,
} from '../store/reducers/contacts/contactsActionCreators';
import ModalComponent from './modalComponent';

const Contact: React.FC<IContact> = ({ id, avatar, name, ownerId }) => {
  const dispatch = useDispatch();

  const removeContact = () => {
    dispatch(removeContactAsync(id));
  };

  const updateContact = (n: string) => {
    dispatch(updateContactAsync({ id, avatar, name: n, ownerId }));
  };

  return (
    <div className='d-flex align-items-center justify-content-between position-relative'>
      <img className='rounded-circle' src={avatar} alt='avatar' />
      <h3>{name}</h3>
      <div className='d-flex align-items-center justify-content-between'>
        <ModalComponent
          title='Редактировать'
          str={name}
          btnTitle='Сохранить'
          submit={updateContact}
        >
          <BsPencilFill />
        </ModalComponent>
        <Button variant='transperent' onClick={removeContact}>
          <BsXLg />
        </Button>
      </div>
    </div>
  );
};

export default Contact;
