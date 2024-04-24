import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Film } from "models/film.model"
import { HttpClient } from "@angular/common/http"
import {Lieu} from "../models/lieu.model";

@Injectable({
  providedIn: "root",
})
export class FilmService {
  constructor(private http: HttpClient) {}

  private filmsURL = "http://localhost:8080/films"

  findAll(): Observable<Film[]> {
    return this.http.get<Film[]>(this.filmsURL)
  }

  findById(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.filmsURL}/${id}`)
  }

  delete(film: Film) {
    return this.http.delete(`${this.filmsURL}/${film.id}`)
  }
  getFilmsByUserId(userId: number): Observable<Film[]> {
    const url = `${this.filmsURL}/user/${userId}`;
    return this.http.get<Film[]>(url);
  }

}
