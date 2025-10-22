import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient){}

    login(credentials: { email: string, password: string }) {
        return this.http.post('/api/auth/login', credentials)
    }
}