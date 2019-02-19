import { Action } from '@ngrx/store';
import { User } from 'src/app/auth/model/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Sign_Up = '[Auth] Sign Up',
  Forget_Password = '[Auth] Forget Password',
  Password_Update = '[Auth] Update Password',
  Get_Current_User = '[Auth] Get Current User',
  Get_Current_User_Success = '[Auth] Get Current User Success',
  LogOut = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public readonly payload?: User) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.Sign_Up;
  constructor(public readonly payload?: User) {}
}

export class ForgetPassword implements Action {
  readonly type = AuthActionTypes.Forget_Password;
  constructor(public readonly payload?: any) {}
}

export class UpdatePassword implements Action {
  readonly type = AuthActionTypes.Password_Update;
  constructor(public readonly payload?: any) {}
}

export class GetCurrentUser implements Action {
  readonly type = AuthActionTypes.Get_Current_User;
  constructor(public readonly payload?: string) {}
}

export class GetCurrentUserSuccess implements Action {
  readonly type = AuthActionTypes.Get_Current_User_Success;
  constructor(public readonly payload?: User) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.LogOut;
}

export type AuthActions =
  | Login
  | SignUp
  | ForgetPassword
  | UpdatePassword
  | GetCurrentUser
  | GetCurrentUserSuccess
  | Logout;
