import { IContact } from '../../../models/contact-model';
import { ContactsAction, ContactsActionEnum, IContactsState } from './types';

const initialState: IContactsState = {
  contacts: [] as IContact[],
  isLoading: false,
  error: null,
};

const contactsReducer = (
  state: IContactsState,
  action: ContactsAction
): IContactsState => {
  switch (action.type) {
    case ContactsActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    case ContactsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case ContactsActionEnum.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ContactsActionEnum.REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => action.payload != contact.id
        ),
      };
    case ContactsActionEnum.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case ContactsActionEnum.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? { ...contact, ...action.payload }
            : contact
        ),
      };
    default:
      return state;
  }
};

export default contactsReducer;
