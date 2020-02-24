import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {

    idToken: string, // A Firebase Auth ID token for the newly created user.
    email: string, // The email for the newly created user.
    refreshToken: string, // A Firebase Auth refresh token for the newly created user.
    expiresIn: string, // The number of seconds in which the ID token expires.
    localId: string // The uid of the newly created user.

}

@Injectable({
    providedIn: "root"
})
export class AuthService {

    private FIREBASE_API_KEY = 'AIzaSyD1Gm7KQfrmCfP9GepBLpY6wOj5OI9B0ec';

    constructor(private http: HttpClient) {

    }

    signUp(_email: string, _password: string) {
        
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' 
                + this.FIREBASE_API_KEY, {

            email: _email,
            password: _password,
            returnSecureToken: true
        });
    }


    signIn(_email: string, _password: string) {
        
        return this.http
            .post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' 
                + this.FIREBASE_API_KEY, {

            email: _email,
            password: _password,
            returnSecureToken: true
        });
    }
}