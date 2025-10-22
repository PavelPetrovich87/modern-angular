import { FormsModule } from "@angular/forms";
import { Component } from "@angular/core";
import { NgIf } from "@angular/common";
import { AuthService } from "../services/authService";

@Component({
    selector: 'app-login',
    template: `
    <div class="login-container">
        <h1>Login</h1>
        <form>
        <input type="text" name="email"
            placeholder="Email"
            [(ngModel)]="credentials.email" />
        <input type="password" name="password" placeholder="Password"
            [(ngModel)]="credentials.password">
        <button type="submit">Login</button>
        </form>
        <span class='warning' *ngIf="!credentials.email"></span>
    </div>`,
    imports: [FormsModule, NgIf],
    providers: [AuthService]
})

export class LoginComponent {
    constructor(private authService: AuthService) {}
    credentials = { email: '', password: '' }
    submit () {
        const { email, password } = this.credentials
        if (email && password) {
            this.authService.login({email, password}).subscribe()
        }
    }
}