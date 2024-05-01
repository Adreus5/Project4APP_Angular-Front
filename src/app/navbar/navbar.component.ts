import { Component, OnInit } from "@angular/core";
import { Link } from "models/links.model";
import { AuthService } from "../services/auth.service";
import { Utilisateur } from "models/user.model";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  links: Link[] = [];
  user: Utilisateur | null = null;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    if(this.authService.getCurrentUser() == null ){
      this.links.push({ name: "Login", href: "login" });
      this.links.push({ name: "Sign Up", href: "create-user" });
    }
    if(this.authService.getCurrentUser()?.typeUser === "client") {
      this.links.push({name: "Accueil",href: "accueil"})
    }else if(this.authService.getCurrentUser()?.typeUser === "admin"){
      this.links.push({name: "Accueil",href: "accueil"})
      this.links.push({ name: "Dashboard", href: "dashboard" });
    }
  }
}
