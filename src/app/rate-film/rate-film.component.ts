import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { NoteFilm } from '../models/film.model';

@Component({
  selector: 'app-rate-film',
  templateUrl: './rate-film.component.html',
  styleUrls: ['./rate-film.component.scss']
})
export class RateFilmComponent implements OnInit {
  noteFilm: NoteFilm = { note: 0, commentaire: '', filmId: 0, utilisateurId: 1 }; // on va mettre par défaut un ID je ne sais pas comment faire l'import pour l'instant

  constructor(private route: ActivatedRoute, private filmService: FilmService, private router: Router) {}

  ngOnInit(): void {
    this.noteFilm.filmId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  submit() {
    this.filmService.rateFilm(this.noteFilm).subscribe(() => {
      this.router.navigate(['/films']);
    });
  }
}
