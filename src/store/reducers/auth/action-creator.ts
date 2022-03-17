import { AppDispatch } from '../..';
import { IUser } from '../../../models/user-model';
import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetUserAction,
} from './types';

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
      const response = await fetch(
        `loacalhost:3000/users?username=${username}&password=${password}`
      );
      if (response.ok) {
        const [user]: IUser[] = await response.json();
        dispatch(setIsAuth(true));
        dispatch(setIsLoading(false));
        dispatch(setUser(user));
      } else {
        throw new Error();
      }
    } catch (error) {
      dispatch(setError('Пользователь с таким именем и паролем не существует'));
      dispatch(setIsLoading(false));
    }
  };
