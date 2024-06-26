import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  mail: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin(): void {
    this.authService.login(this.mail).subscribe({
      next: (user) => {
        if (user) {
          if (this.authService.isAdmin()) {
            this.router.navigate(['/dashboard']);  // Rediriger vers le tableau de bord si admin
          } else {
            this.router.navigate(['/accueil']);  // Rediriger vers une autre page si non-admin
          }
        } else {
          this.errorMessage = 'Aucun utilisateur trouvé avec cet email';
        }
      },
      error: (error) => {
        this.errorMessage = "Erreur lors de la tentative de connexion";
        console.error('Login error:', error);
      }
    });
  }
}
