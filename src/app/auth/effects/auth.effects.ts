import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { AuthActionTypes } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    @Effect() login$ = this.actions$.pipe(ofType(AuthActionTypes.Login));

    constructor(private actions$: Actions) {}
}
