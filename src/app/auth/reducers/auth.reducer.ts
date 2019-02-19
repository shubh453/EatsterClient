
import { AuthActions, AuthActionTypes } from '../actions/auth.actions';
import { User } from 'src/app/auth/model/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
  errorMessage: string;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.Login_Success: {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errorMessage: null
      };
    }
    case AuthActionTypes.Login_Failed: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: action.payload.errorMessage
      };
    }
    case AuthActionTypes.LogOut_Success: {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: null
      };
    }
    case AuthActionTypes.Get_Current_User_Success: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
}
