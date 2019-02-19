import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth.routes';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgetPasswordComponent, UpdatePasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
