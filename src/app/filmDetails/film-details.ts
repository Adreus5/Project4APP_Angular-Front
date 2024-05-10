// src/app/filmDetails/film-details.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';
import { NoteFilmService } from '../services/note-film.service';
import { Film } from '../models/film.model';
import { NoteFilm } from '../models/note-film.model';
import { AuthService } from '../services/auth.service';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'film-details',
  templateUrl: './film-details.html',
  styleUrls: ['./film-details.scss'],
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  standalone: true
})
export class FilmDetailsComponent implements OnInit {
  film: Film | undefined;
  notesFilm: NoteFilm[] = [];
  newNote: NoteFilm = {
    filmId: 0,
    utilisateurId: 0,
    note: 0,
    commentaire: ''
  };

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService,
    private noteFilmService: NoteFilmService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const filmId = parseInt(this.route.snapshot.params['id'], 10);
    if (!isNaN(filmId)) {
      this.filmService.findById(filmId).subscribe({
        next: (film) => {
          this.film = film;
          this.newNote.filmId = Number(film.id ?? 0); // Conversion en number
        },
        error: (error) => console.error('Erreur lors du chargement du film', error)
      });

      this.noteFilmService.findByFilmId(filmId).subscribe({
        next: (notes) => {
          this.notesFilm = notes;
        },
        error: (error) => console.error('Erreur lors du chargement des notes du film', error)
      });

      const currentUser = this.authService.getCurrentUser();
      if (currentUser) {
        this.newNote.utilisateurId = Number(currentUser.id);
      }
    }
  }

  saveNote(): void {
    if (this.newNote.note > 0 && this.newNote.note <= 5) {
      this.noteFilmService.addNoteToFilm(this.newNote).subscribe({
        next: (note) => {
          this.notesFilm.push(note);
          this.newNote.note = 0;
          this.newNote.commentaire = '';
        },
        error: (error) => console.error('Erreur lors de l\'enregistrement de la note', error)
      });
    }
  }
}
