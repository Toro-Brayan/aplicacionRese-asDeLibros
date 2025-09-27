import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
   imports:  [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fullname: string = '';
  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.email, this.password, this.fullname).subscribe({
      next: (res: any) => {
        this.success = res.message;
        this.router.navigate(['/login']);
      },
      error: (err: any) => { // 👈 tipado explícito
      this.error = err.error?.message || 'Ocurrió un error';
    }
    });
  }
}
