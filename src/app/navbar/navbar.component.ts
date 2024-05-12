import { Component } from "@angular/core";
import { Link } from "models/links.model";
import { AuthService } from "services/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = [];
  links2: Link[] = [];

  constructor(public authService: AuthService) {
    this.links.push({ name: "Dashboard", href: "dashboard" });
    this.links.push({ name: "Accueil", href: "accueil" });

    this.links2.push({ name: "Login", href: "login" });
    this.links2.push({ name: "Sign Up", href: "create-user" });
  }
}
