import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private authService: AuthService ,  private router: Router ) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: () => {
          console.log("Logged User:", )
          this.router.navigate([  "/user-profile" ]);
        },
        error: (err) => console.error('Login failed', err),
      });
  }

  logout() {
    this.authService.logout().subscribe(() => alert('Logged out!'));
  }

}