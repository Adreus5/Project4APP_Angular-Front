// src/app/services/note-lieu.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteLieu } from '../models/note-lieu.model';

@Injectable({
  providedIn: 'root'
})
export class NoteLieuService {
  private apiUrl = 'http://localhost:8080/note-lieux';

  constructor(private http: HttpClient) {}

  findAll(): Observable<NoteLieu[]> {
    return this.http.get<NoteLieu[]>(this.apiUrl);
  }

  findById(id: number): Observable<NoteLieu> {
    return this.http.get<NoteLieu>(`${this.apiUrl}/${id}`);
  }

  findByLieuId(lieuId: number): Observable<NoteLieu[]> {
    return this.http.get<NoteLieu[]>(`${this.apiUrl}/lieu/${lieuId}`);
  }

  addNoteToLieu(noteLieu: NoteLieu): Observable<NoteLieu> {
    return this.http.post<NoteLieu>(this.apiUrl, noteLieu);
  }

  update(id: number, noteLieu: NoteLieu): Observable<NoteLieu> {
    return this.http.put<NoteLieu>(`${this.apiUrl}/${id}`, noteLieu);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
