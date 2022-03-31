import { AppDispatch } from '../..';
import { IContact } from '../../../models/contact-model';
import axios from 'axios';

import {
  AddContactAction,
  ContactsActionEnum,
  RemoveContactAction,
  RemoveContactsAction,
  SetContactsAction,
  SetErrorAction,
  SetIsLoadingAction,
  UpdateContactAction,
} from './types';

const client = axios.create({
  baseURL: 'http://localhost:3004',
});

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

export const removeContacts = (): RemoveContactsAction => ({
  type: ContactsActionEnum.REMOVE_CONTACTS,
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
      const { data } = await client.get<IContact[]>(`/contacts?ownerId=${id}`);
      if (data.length) {
        dispatch(setContacts(data));
      }
    } catch (error) {
      dispatch(setError('Произошла ошибка'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const addContactAsync =
  (contact: Omit<IContact, 'id'>) => async (dispatch: AppDispatch) => {
    if (!contact.name.trim()) {
      dispatch(setError('Имя контакта не может быть пустым'));
      return;
    }
    try {
      const { data } = await client.post<IContact>(`/contacts/`, contact);
      dispatch(addContact(data));
    } catch (error) {
      dispatch(setError('Не удалось добавить контакт'));
    }
  };

export const removeContactAsync =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      await client.delete(`/contacts/${id}`);
      dispatch(removeContact(id));
    } catch (error) {
      dispatch(setError('Не удалось удалить контакт'));
    }
  };

export const updateContactAsync =
  (contact: IContact) => async (dispatch: AppDispatch) => {
    try {
      await client.patch(`/contacts/${contact.id}`, contact);
      dispatch(updateContact(contact));
    } catch (error) {
      dispatch(setError('Не удалось обновить контакт'));
    }
  };

export const searchContactsAsync =
  (query: string, ownerId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));
      const { data } = await client.get<IContact[]>(
        `/contacts?ownerId=${ownerId}&name_like=${query}`
      );
      dispatch(setContacts(data));
    } catch (error) {
      dispatch(setError('Произошла ошибка'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
