import { Component } from '@angular/core';

@Component({
  selector: 'button-log-in',
  standalone: true,
  imports: [],
  templateUrl: './button-log-in.component.html',
  styleUrl: './button-log-in.component.scss'
})
export class ButtonLogInComponent {
  title : string = "Log in"
}
