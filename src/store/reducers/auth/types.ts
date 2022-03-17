import { IUser } from '../../../models/user-model';

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  error: string | null;
  isLoading: boolean;
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_USER = 'SET_USER',
}

interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export type IAuthAction = SetAuthAction;
