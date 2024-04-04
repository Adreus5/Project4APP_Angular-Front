import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Utilisateur } from "models/user.model"
import {ActivatedRoute, Router, RouterLink} from "@angular/router"
import { UserService } from "services/user.service"
import {AsyncPipe} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: "dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  imports: [
    AsyncPipe,
    RouterLink,
    MatIcon
  ],
  standalone: true
})

export class DashboardComponent {

  users:Utilisateur[]=[]
  constructor( private UserService: UserService, private router: Router) {
    UserService.findAll().subscribe(users => this.users=users);
  }

  deleteUser(event: any, users: Utilisateur) {
    event.stopPropagation()
    this.UserService.delete(users).subscribe(() => this.router.navigate(["users"]))
  }
}
