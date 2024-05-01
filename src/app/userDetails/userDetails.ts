import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Lieu} from 'models/lieu.model';
import {LieuService} from 'services/lieu.service';
import {UserService} from 'services/user.service';
import {Film} from '../models/film.model';
import {FilmService} from '../services/film.service';
import {Utilisateur} from '../models/user.model';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: "user-details",
  templateUrl: "./userDetails.html",
  styleUrls: ["./userDetails.scss"],
  imports: [CommonModule, FormsModule],
  standalone: true
})
export class UserDetailsComponent implements OnInit {
  user: Utilisateur | undefined;
  films: Film[] = [];
  lieux: Lieu[] = [];

  constructor(
    private route: ActivatedRoute,
    private lieuService: LieuService,
    private userService: UserService,
    private filmService: FilmService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    const userId = parseInt(this.route.snapshot.params["id"], 10);
    if (!isNaN(userId)) {
      this.userService.findById(userId).subscribe({
        next: (user) => {
          this.user = user;
          // Récupérer les films et les lieux avec vérifications de sécurité
          this.filmService.getFilmsByUserId(userId).subscribe(films => {
            this.films = films.map(film => ({
              ...film,
              note: film.noteFilms?.length ? film.noteFilms[0].note : 'Pas de note',
              commentaire: film.noteFilms?.length ? film.noteFilms[0].commentaire : 'Pas de commentaire'
            }));
          });

          this.lieuService.getLieuxByUserId(userId).subscribe(lieux => {
            this.lieux = lieux.map(lieu => ({
              ...lieu,
              note: lieu.noteLieus?.length ? lieu.noteLieus[0].note : 'Pas de note',
              commentaire: lieu.noteLieus?.length ? lieu.noteLieus[0].commentaire : 'Pas de commentaire'
            }));
          });
        },
        error: (error) => console.error('Error loading the user', error)
      });
    }
  }
  save(user: Utilisateur) {
    const id = this.user ? this.user.id : 'new';

    if (id === 'new') {
      this.userService.create(user).subscribe(() => this.router.navigate(['users']));
    } else {
      this.userService.update(id, user).subscribe(() => this.router.navigate(['users']));
    }
  }
}
