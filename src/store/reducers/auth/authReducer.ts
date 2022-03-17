import { IUser } from '../../../models/user-model';
import { AuthActionEnum, AuthAction, IAuthState } from './types';

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default authReducer;
