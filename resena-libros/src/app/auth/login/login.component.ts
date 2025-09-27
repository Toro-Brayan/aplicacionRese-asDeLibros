import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports:  [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: string = ''; // mensaje de error

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token); // guardar JWT
        this.router.navigate(['/home']);
      },
      error: (err: any) => { // 👈 tipado explícito
      this.error = err.error?.message || 'Ocurrió un error';
    }
    });
  }
}
