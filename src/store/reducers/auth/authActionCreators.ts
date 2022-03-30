import { AppDispatch } from '../..';
import { IUser } from '../../../models/user-model';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';
import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3004',
});

export const setIsAuth = (auth: boolean): SetAuthAction => ({
  type: AuthActionEnum.SET_IS_AUTH,
  payload: auth,
});

export const setIsLoading = (loading: boolean): SetIsLoadingAction => ({
  type: AuthActionEnum.SET_IS_LOADING,
  payload: loading,
});

export const setUser = (user: IUser): SetUserAction => ({
  type: AuthActionEnum.SET_USER,
  payload: user,
});

export const setError = (error: string): SetErrorAction => ({
  type: AuthActionEnum.SET_ERROR,
  payload: error,
});

export const login =
  (username: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setIsLoading(true));

      const { data } = await client.get<IUser[]>(
        `/users?username=${username}&password=${password}`
      );

      if (data.length) {
        localStorage.setItem('auth', JSON.stringify(data[0]));
        dispatch(setIsAuth(true));
        dispatch(setUser(data[0]));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(setError('Пользователь с таким именем и паролем не существует'));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

export const checkAuthLocalStorage = () => async (dispatch: AppDispatch) => {
  const auth = localStorage.getItem('auth');
  if (!auth) return;

  const user = JSON.parse(auth);
  dispatch(setIsAuth(true));
  dispatch(setUser(user as IUser));
};
