import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/auth/authReducer';
import contactsReducer from './reducers/contacts/contactsReducer';
// import contactsReducer from './reducers/contacts/contactsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
