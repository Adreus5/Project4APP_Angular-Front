import { Component } from '@angular/core';


@Component({
  selector: 'button-user',
  standalone: true,
  imports: [],
  templateUrl: './button-user.component.html',
  styleUrl: './button-user.component.scss'
})
export class ButtonUserComponent {
 title : string = "Sign Up now";

}
