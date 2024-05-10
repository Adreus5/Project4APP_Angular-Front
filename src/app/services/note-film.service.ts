// src/app/services/note-film.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteFilm } from '../models/note-film.model';

@Injectable({
  providedIn: 'root'
})
export class NoteFilmService {
  private apiUrl = 'http://localhost:8080/note-films';

  constructor(private http: HttpClient) {}

  findAll(): Observable<NoteFilm[]> {
    return this.http.get<NoteFilm[]>(this.apiUrl);
  }

  findById(id: number): Observable<NoteFilm> {
    return this.http.get<NoteFilm>(`${this.apiUrl}/${id}`);
  }

  findByFilmId(filmId: number): Observable<NoteFilm[]> {
    return this.http.get<NoteFilm[]>(`${this.apiUrl}/film/${filmId}`);
  }

  addNoteToFilm(noteFilm: NoteFilm): Observable<NoteFilm> {
    return this.http.post<NoteFilm>(this.apiUrl, noteFilm);
  }

  update(id: number, noteFilm: NoteFilm): Observable<NoteFilm> {
    return this.http.put<NoteFilm>(`${this.apiUrl}/${id}`, noteFilm);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


}
