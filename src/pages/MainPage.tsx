import React, { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row, Stack } from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Contact from '../components/contact';
import CustomSpinner from '../components/customSpinner';
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

  const handleSearch = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(searchContactsAsync(query, user!.id));
  };

  const addContact = (n: string) => {
    if (!n.trim()) return;
    const contactObj: Omit<IContact, 'id'> = {
      avatar: 'https://i.pravatar.cc/45',
      name: n,
      ownerId: user!.id,
    };
    dispatch(addContactAsync(contactObj));
  };

  if (isLoading) return <CustomSpinner />;

  return (
    <div className='container my-5'>
      <Row>
        <Col sm={6} className='mx-auto'>
          <Stack direction='horizontal' gap={3}>
            <Form.Control
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='me-auto'
              placeholder='Введите имя...'
            />
            <Button onClick={handleSearch} variant='secondary'>
              Искать
            </Button>
          </Stack>
          {error && <p className='text-danger'>{error}</p>}
          <div className='my-3'></div>
          {contacts.map(contact => (
            <ListGroup key={contact.id}>
              <Contact {...contact} />
            </ListGroup>
          ))}
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
