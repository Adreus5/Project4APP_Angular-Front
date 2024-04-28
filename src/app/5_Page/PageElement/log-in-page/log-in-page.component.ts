import { Component } from '@angular/core';
import { ButtonUserComponent } from "../../../1_Atoms/AtomElement/button-user/button-user.component"
import { ButtonLogInComponent } from "../../../1_Atoms/AtomElement/button-log-in/button-log-in.component"

@Component({
  selector: 'log-in-page',
  standalone: true,
  imports: [
    ButtonUserComponent,
    ButtonLogInComponent
  ],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.scss'
})
export class LogInPageComponent {
  miInstance: ButtonUserComponent;
  miSInstance : ButtonLogInComponent
  constructor() {
    this.miInstance = new ButtonUserComponent();
    // @ts-ignore
    this.miSInstance = new ButtonLogInComponent();
  }
}
