import { AuthActionEnum, IAuthAction, IAuthState } from './types';

const initialState: IAuthState = {
  isAuth: false,
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action: IAuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default authReducer;
