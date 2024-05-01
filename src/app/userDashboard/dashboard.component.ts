import {Component} from "@angular/core"
import {Utilisateur} from "models/user.model"
import {Router, RouterLink} from "@angular/router"
import {UserService} from "services/user.service"
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton
  ],
  standalone: true
})

export class DashboardComponent {

  users: Utilisateur[] = []

  constructor(private UserService: UserService, private router: Router) {
    UserService.findAll().subscribe(users => this.users = users);
  }

  deleteUser(event: any, users: Utilisateur) {
    event.stopPropagation()
    this.UserService.delete(users).subscribe(() => this.router.navigate(["users"]))
  }

  addUser(): void {
    this.router.navigate(['/create-user']);
  }
}
