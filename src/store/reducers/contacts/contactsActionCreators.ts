import { AppDispatch } from '../..';
import { IContact } from '../../../models/contact-model';
import axios from 'axios';

import {
  AddContactAction,
  ContactsActionEnum,
  RemoveContactAction,
  SetContactsAction,
  SetErrorAction,
  SetIsLoadingAction,
  UpdateContactAction,
} from './types';

export const setError = (error: string): SetErrorAction => ({
  type: ContactsActionEnum.SET_ERROR,
  payload: error,
});

export const setIsLoading = (loading: boolean): SetIsLoadingAction => ({
  type: ContactsActionEnum.SET_IS_LOADING,
  payload: loading,
});

export const setContacts = (contacts: IContact[]): SetContactsAction => ({
  type: ContactsActionEnum.SET_CONTACTS,
  payload: contacts,
});

export const removeContact = (id: string): RemoveContactAction => ({
  type: ContactsActionEnum.REMOVE_CONTACT,
  payload: id,
});

export const addContact = (contact: IContact): AddContactAction => ({
  type: ContactsActionEnum.ADD_CONTACT,
  payload: contact,
});

export const updateContact = (contact: IContact): UpdateContactAction => ({
  type: ContactsActionEnum.UPDATE_CONTACT,
  payload: contact,
});

export const fetchContactsAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { data } = await axios.get<IContact[]>(
        `localhost:3004/contacts/${id}`
      );
      if (data.length) {
        dispatch(setContacts(data));
      } else {
        const obj = { id, contacts: [] };
        await axios.post(`localhost:3004/contacts/${id}`, obj);
      }
    } catch (error) {
      dispatch(setError('Произошла ошибка'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const addContactAsync =
  (contact: IContact) => async (dispatch: AppDispatch) => {
    try {
      await axios.put(`localhost:3004/contacts/`, contact);
      dispatch(addContact(contact));
    } catch (error) {
      setError('Не удалось добавить контакт');
    }
  };

export const removeContactAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      await axios.delete(`localhost:3004/contacts/${id}`);
      dispatch(removeContact(id));
    } catch (error) {
      setError('Не удалось добавить контакт');
    }
  };
