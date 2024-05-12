// src/app/rate-film/rate-film.component.ts
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
  noteFilm: NoteFilm = { note: 0, commentaire: '', filmId: 0, utilisateurId: 1 };

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private router: Router
  ) {}

  submit(): void {
    this.filmService.rateFilm(this.noteFilm).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.noteFilm.filmId = +id;
    }
  }
}
