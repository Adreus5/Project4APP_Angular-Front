import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Film } from "../models/film.model";
import { NoteFilm } from "../models/film.model";

@Injectable({
  providedIn: "root",
})
export class FilmService {
  private filmsURL = "http://localhost:8080/films";

  rateFilm(noteFilm: NoteFilm): Observable<any> {
    return this.http.post(`${this.filmsURL}/rate`, noteFilm);
  }



  constructor(private http: HttpClient) {}

  findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsURL);
  }

  findById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.filmsURL}/${id}`);
  }

  delete(film: Film) {
    return this.http.delete(`${this.filmsURL}/${film.id}`);
  }

  getFilmsByUserId(userId: number): Observable<Film[]> {
    const url = `${this.filmsURL}/user/${userId}`;
    return this.http.get<Film[]>(url);
  }


}
