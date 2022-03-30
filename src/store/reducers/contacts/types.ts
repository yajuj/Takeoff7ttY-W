import { IContact } from '../../../models/contact-model';

export interface IContactsState {
  contacts: IContact[];
  isLoading: boolean;
  error: string | null;
}

export enum ContactsActionEnum {
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_CONTACTS = 'SET_CONTACTS',
  ADD_CONTACT = 'ADD_CONTACT',
  REMOVE_CONTACT = 'REMOVE_CONTACT',
  REMOVE_CONTACTS = 'REMOVE_CONTACTS',
  UPDATE_CONTACT = 'UPDATE_CONTACT',
}

export interface SetErrorAction {
  type: ContactsActionEnum.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: ContactsActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetContactsAction {
  type: ContactsActionEnum.SET_CONTACTS;
  payload: IContact[];
}

export interface AddContactAction {
  type: ContactsActionEnum.ADD_CONTACT;
  payload: IContact;
}

export interface RemoveContactAction {
  type: ContactsActionEnum.REMOVE_CONTACT;
  payload: string;
}

export interface RemoveContactsAction {
  type: ContactsActionEnum.REMOVE_CONTACTS;
}

export interface UpdateContactAction {
  type: ContactsActionEnum.UPDATE_CONTACT;
  payload: IContact;
}

export type ContactsAction =
  | SetErrorAction
  | SetIsLoadingAction
  | SetContactsAction
  | AddContactAction
  | RemoveContactAction
  | RemoveContactsAction
  | UpdateContactAction;
