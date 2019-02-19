import { Action } from '@ngrx/store';

export enum AuthApiActionTypes {
  Login_Success = '[Auth Api] Login Success',
  Login_Failed = '[Auth Api] Login Failed',
  Sign_Up_Success = '[Auth Api] Sign Up Success',
  Sign_Up_Failed = '[Auth Api] Sign Up Failed',
  Password_Update_Success = '[Auth Api] Password Update Success',
  Password_Update_Failed = '[Auth Api] Password Update Failed',
  LogOut_Success = '[Auth Api] LogOut Success'
}

export class LoginSuccess implements Action {
  readonly type = AuthApiActionTypes.Login_Success;
  constructor(public readonly payload?: any) {}
}

export class LoginFailed implements Action {
  readonly type = AuthApiActionTypes.Login_Failed;
  constructor(public readonly payload?: any) {}
}

export class SignUpSuccess implements Action {
  readonly type = AuthApiActionTypes.Sign_Up_Success;
  constructor(public readonly payload?: any) {}
}

export class SignUpFailed implements Action {
  readonly type = AuthApiActionTypes.Sign_Up_Failed;
  constructor(public readonly payload?: any) {}
}

export class UpdatePasswordFailed implements Action {
  readonly type = AuthApiActionTypes.Password_Update_Failed;
}

export class UpdatePasswordSuccess implements Action {
  readonly type = AuthApiActionTypes.Password_Update_Success;
}

export class LogoutSuccess implements Action {
  readonly type = AuthApiActionTypes.LogOut_Success;
}

export type AuthApiActions = LoginSuccess
                           | LoginFailed
                           | SignUpSuccess
                           | SignUpFailed
                           | UpdatePasswordFailed
                           | UpdatePasswordSuccess
                           | LogoutSuccess;
