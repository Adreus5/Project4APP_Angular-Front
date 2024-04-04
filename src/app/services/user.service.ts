import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Utilisateur } from "models/user.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  private usersURL = "http://localhost:8080/utilisateurs"

  findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.usersURL)
  }

  findById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.usersURL}/${id}`)
  }

  delete(user: Utilisateur) {
    return this.http.delete(`${this.usersURL}/${user.id}`)
  }

  create(Utilisateur: Utilisateur) {

  }
}
