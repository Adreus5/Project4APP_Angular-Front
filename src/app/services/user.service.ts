import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Utilisateur } from "models/user.model"
import {HttpClient, HttpHeaders} from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  update(id: number | undefined, user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.usersURL}/${id}`, user)
  }

  create(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.usersURL, user,this.httpOptions)
  }

  getNotesAndCommentsByUserId(userId: number): Observable<any> {
    return this.http.get<any>(`${this.usersURL}/user/${userId}/notes`);
  }
  checkEmailNotTaken(mail: string): Observable<boolean> {
    mail = encodeURIComponent(mail); // Encode l'email pour une utilisation sûre dans l'URL
    return this.http.get<boolean>(`${this.usersURL}/${mail}`);
  }
}
