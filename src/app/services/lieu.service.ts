import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Lieu } from "models/lieu.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class LieuService {
  constructor(private http: HttpClient) {}

  private lieuxURL = "http://localhost:8080/lieux"

  findAll(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.lieuxURL)
  }

  findById(id: number): Observable<Lieu> {
    return this.http.get<Lieu>(`${this.lieuxURL}/${id}`)
  }

  delete(film: Lieu) {
    return this.http.delete(`${this.lieuxURL}/${film.id}`)
  }

}
