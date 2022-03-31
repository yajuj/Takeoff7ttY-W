import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import ContactsList from '../components/contactsList';
import ModalComponent from '../components/modalComponent';
import useAuth from '../hooks/useAuth';
import useContacts from '../hooks/useContacts';
import { IContact } from '../models/contact-model';
import {
  addContactAsync,
  fetchContactsAsync,
  searchContactsAsync,
} from '../store/reducers/contacts/contactsActionCreators';

const MainPage = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [query, setQuery] = useState('');

  useEffect(() => {
    !query && dispatch(fetchContactsAsync(user!.id));
  }, [dispatch, query]);

  const { isLoading, error, contacts } = useContacts();

  const inputEl = useRef<HTMLInputElement>(null);

  const handleSearch = (e?: React.FormEvent<HTMLButtonElement>) => {
    e && e.preventDefault();
    dispatch(searchContactsAsync(query, user!.id));
    if (inputEl.current) {
      inputEl.current.focus();
    }
  };

  const addContact = (n: string) => {
    const contactObj: Omit<IContact, 'id'> = {
      avatar: 'https://i.pravatar.cc/45',
      name: n,
      ownerId: user!.id,
    };
    dispatch(addContactAsync(contactObj));
  };

  return (
    <div className='container my-5'>
      <Row>
        <Col sm={6} className='mx-auto'>
          <InputGroup className='mb-4'>
            <Form.Control
              value={query}
              ref={inputEl}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              className='me-auto position-relative'
              placeholder='Введите имя...'
            />
            {query && (
              <button
                style={{
                  position: 'absolute',
                  right: '80px',
                  top: '50%',
                  transform: 'translate(0,-50%)',
                  zIndex: 999,
                }}
                onClick={() => setQuery('')}
                type='button'
                className='btn-close'
                aria-label='Close'
              ></button>
            )}
            <Button
              disabled={!query}
              onClick={handleSearch}
              variant='outline-secondary'
              id='button-addon1'
            >
              Искать
            </Button>
          </InputGroup>

          {error && <p className='text-danger'>{error}</p>}
          <div className='my-3'></div>
          <ContactsList isLoading={isLoading} contacts={contacts} />
        </Col>
      </Row>
      <ModalComponent
        title='Добавить контакт'
        btnTitle='Добавить'
        submit={addContact}
      >
        <div className='btn-add'>
          <BsPlus />
        </div>
      </ModalComponent>
    </div>
  );
};

export default MainPage;
