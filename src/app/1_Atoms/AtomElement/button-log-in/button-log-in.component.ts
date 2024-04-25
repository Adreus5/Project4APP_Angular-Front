import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-log-in',
  standalone: true,
  imports: [],
  templateUrl: './button-log-in.component.html',
  styleUrl: './button-log-in.component.scss'
})
export class ButtonLogInComponent {
  title : string = "Log in"
  constructor(private router: Router) { }
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }
}
