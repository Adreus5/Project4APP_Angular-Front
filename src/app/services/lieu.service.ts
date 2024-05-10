import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../models/lieu.model';
import { NoteLieu } from '../models/note-lieu.model';

@Injectable({
  providedIn: 'root'
})
export class LieuService {
  private lieuxURL = 'http://localhost:8080/lieux';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Lieu[]> {
    return this.http.get<Lieu[]>(this.lieuxURL);
  }

  findById(id: number): Observable<Lieu> {
    return this.http.get<Lieu>(`${this.lieuxURL}/${id}`);
  }

  addNoteToLieu(lieuId: number, noteLieu: NoteLieu): Observable<NoteLieu> {
    return this.http.post<NoteLieu>(`${this.lieuxURL}/${lieuId}/notes`, noteLieu);
  }

  updateNoteToLieu(lieuId: number, noteLieu: NoteLieu): Observable<NoteLieu> {
    return this.http.put<NoteLieu>(`${this.lieuxURL}/${lieuId}/notes`, noteLieu);
  }

  getNoteByUserAndLieu(lieuId: number, userId: number): Observable<NoteLieu | null> {
    return this.http.get<NoteLieu | null>(`${this.lieuxURL}/${lieuId}/notes/${userId}`);
  }
}
