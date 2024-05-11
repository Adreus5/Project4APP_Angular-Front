import { Component, OnInit } from "@angular/core"
import { ButtonUserComponent } from "../1_Atoms/AtomElement/button-user/button-user.component";
@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  miInstance: ButtonUserComponent;
  constructor() {
    // @ts-ignore
    this.miInstance = new ButtonUserComponent();
  }

  ngOnInit(): void {}
}
