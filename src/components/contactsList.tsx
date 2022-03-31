import React from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { IContact } from '../models/contact-model';
import Contact from './contact';
import CustomSpinner from './customSpinner';
interface IContactsList {
  contacts: IContact[];
  isLoading: boolean;
}

const ContactsList: React.FC<IContactsList> = ({ contacts, isLoading }) => {
  if (isLoading) return <CustomSpinner />;
  return (
    <React.Fragment>
      {contacts.map(contact => (
        <ListGroup key={contact.id}>
          <Contact {...contact} />
        </ListGroup>
      ))}
    </React.Fragment>
  );
};

export default ContactsList;
