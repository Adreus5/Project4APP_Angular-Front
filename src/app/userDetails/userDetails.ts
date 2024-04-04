import {Component} from "@angular/core"
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router"
import {Lieu} from "models/lieu.model"
import {LieuService} from "services/lieu.service"
import {UserService} from "services/user.service"
import {Film} from "../models/film.model"
import {FilmService} from "../services/film.service"
import {Utilisateur} from "../models/user.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "user-details",
  templateUrl: "./userDetails.html",
  styleUrls: ["./userDetails.scss"],
  imports: [
    FormsModule
  ],
  standalone: true
})
export class UserDetailsComponent {
  users: Utilisateur[] = []
  user :Utilisateur | undefined
  films: Film[] = []
  lieux: Lieu[] = []

  constructor(
    private _route: ActivatedRoute,
    private LieuService: LieuService,
    private UserService: UserService,
    private FilmService: FilmService,
    private router: Router,
  ) {
    const id : number = parseInt(_route.snapshot.params["id"],10);
    UserService.findById(id).subscribe(user =>this.user=user);
    UserService.findAll().subscribe(users => this.users = users);
    LieuService.findAll().subscribe(lieux => this.lieux = lieux);
    FilmService.findAll().subscribe(films => this.films = films);
  }

  filmClick() {
    this.FilmService.findAll().subscribe(films => {
      this.films = films;
    });
  }

  lieuClick() {
    this.LieuService.findAll().subscribe(lieux => {
      this.lieux = lieux;
    });
  }

  save(user: Utilisateur) {
    const id = this._route.snapshot.params["id"]

    if (id == "new") {
      this.UserService.create(user).subscribe(() => {
        this.router.navigate(["users"])
      })
    } else {
      this.UserService.update(id, user).subscribe(() => {
        this.router.navigate(["users"])
      })
    }
  }
}
