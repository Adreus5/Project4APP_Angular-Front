import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'button-user',
  standalone: true,
  imports: [],
  templateUrl: './button-user.component.html',
  styleUrl: './button-user.component.scss'
})
export class ButtonUserComponent {
  title: string = "Sign Up";

  constructor(private router: Router) { }

  navigateToSignup(): void {
    this.router.navigate(['/create-user']);
  }

}
