import { Component } from '@angular/core';
import { ButtonUserComponent } from "../../../1_Atoms/AtomElement/button-user/button-user.component";
import {ButtonLogInComponent} from "../../../1_Atoms/AtomElement/button-log-in/button-log-in.component"
import {Router} from "@angular/router";
@Component({
  selector: 'start-page',
  standalone: true,
  imports: [
    ButtonUserComponent,
    ButtonLogInComponent,
  ],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {
  miInstance: ButtonUserComponent;
  miSInstance : ButtonLogInComponent

  constructor() {
    this.miInstance = new ButtonUserComponent();
    // @ts-ignore
    this.miSInstance = new ButtonLogInComponent();
  }

}
