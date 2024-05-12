import { Component } from "@angular/core";
import { Link } from "models/links.model";
import { AuthService } from "services/auth.service";
import { DashboardComponent } from "../userDashboard/dashboard.component"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = [];
  linkAdmin : Link[] = []
  links2: Link[] = [];

  constructor(public authService: AuthService) {
    this.links.push({ name: "Accueil", href: "accueil" });

    this.linkAdmin.push({ name : "Dashboard" , href:"dashboard"})
    this.linkAdmin.push({ name : "Add-Film" , href:"create-film"})
    this.linkAdmin.push({ name : "Add-Place" , href:"create-lieu"})

    this.links2.push({ name: "Login", href: "login" });
    this.links2.push({ name: "Sign Up", href: "create-user" });
  }
}
