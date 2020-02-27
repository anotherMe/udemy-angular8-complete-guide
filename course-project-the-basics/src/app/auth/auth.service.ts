import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {

    idToken: string, // A Firebase Auth ID token for the newly created user.
    email: string, // The email for the newly created user.
    refreshToken: string, // A Firebase Auth refresh token for the newly created user.
    expiresIn: string, // The number of seconds in which the ID token expires.
    localId: string, // The uid of the newly created user.
    registered? : boolean // Whether the email is for an existing account.

}

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private FIREBASE_API_KEY = 'AIzaSyD1Gm7KQfrmCfP9GepBLpY6wOj5OI9B0ec';
    public userSubject = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: Router) {
    }

    signUp(_email: string, _password: string) {

        return this.http
        .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.FIREBASE_API_KEY, {

            email: _email,
            password: _password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError), 
            //tap(this.handleAuthentication) // NO: "this" gets dereferenced if using this syntax
            tap(resData => {
                this.handleAuthentication(resData);
              })
        );
    }

    signIn(_email: string, _password: string) {

        return this.http
        .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.FIREBASE_API_KEY, {

            email: _email,
            password: _password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError), 
            //tap(this.handleAuthentication) // NO: "this" gets dereferenced if using this syntax
            tap(resData => {
                this.handleAuthentication(resData);
              })
        );

    }

    logout() {
        this.userSubject.next(null);
        this.router.navigate(['/auth']);
    }

    private handleAuthentication(respData: AuthResponseData) {
        const expirationDate = new Date(new Date().getTime() + +respData.expiresIn * 1000);
        const user = new User(respData.email, respData.localId, respData.idToken, expirationDate);
        this.userSubject.next(user);
    }

    private handleError(err: HttpErrorResponse) {

        // manage a possible error network, which could not be in the same format that the code below is expecting
        if (!err.error || !err.error.error)
            throwError('An error occured');

        let errorMessage = 'A generic error occurred';
        switch(err.error.error.message) {

            // sign up error codes
            case 'EMAIL_EXISTS': 
                errorMessage = 'The email address is already in use by another account';
                break;
            case 'OPERATION_NOT_ALLOWED': 
                errorMessage = 'Password sign-in is disabled for this project';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER': 
                errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later';
                break;

            // sign in error codes
            case 'EMAIL_NOT_FOUND': 
                errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
                break;
            case 'INVALID_PASSWORD': 
                errorMessage = 'The password is invalid or the user does not have a password.';
                break;
            case 'USER_DISABLED': 
                errorMessage = 'The user account has been disabled by an administrator.';
                break;
        }

        return throwError(errorMessage);

    }
}