import { IUser } from '../../../models/user-model';

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  error: string | null;
  isLoading: boolean;
}

export enum AuthActionEnum {
  SET_IS_AUTH = 'SET_IS_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_USER = 'SET_USER',
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_IS_AUTH;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: IUser;
}

export type AuthAction =
  | SetAuthAction
  | SetErrorAction
  | SetIsLoadingAction
  | SetUserAction;
