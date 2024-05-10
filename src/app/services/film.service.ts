import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/film.model';
import { NoteFilm } from '../models/note-film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  private filmsURL = 'http://localhost:8080/films';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsURL);
  }

  findById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.filmsURL}/${id}`);
  }

  addNoteToFilm(filmId: number, noteFilm: NoteFilm): Observable<NoteFilm> {
    return this.http.post<NoteFilm>(`${this.filmsURL}/${filmId}/notes`, noteFilm);
  }

  updateNoteToFilm(filmId: number, noteFilm: NoteFilm): Observable<NoteFilm> {
    return this.http.put<NoteFilm>(`${this.filmsURL}/${filmId}/notes`, noteFilm);
  }

  getNoteByUserAndFilm(filmId: number, userId: number): Observable<NoteFilm | null> {
    return this.http.get<NoteFilm | null>(`${this.filmsURL}/${filmId}/notes/${userId}`);
  }
}
