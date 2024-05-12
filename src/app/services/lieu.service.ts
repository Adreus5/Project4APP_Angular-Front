import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lieu } from '../models/lieu.model';
import { NoteLieu } from '../models/note-lieu.model';
import {Film} from "../models/film.model";

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

  addLieu(lieu: Lieu): Observable<Lieu> {
    return this.http.post<Lieu>(this.lieuxURL, lieu);
  }
  updateLieu(lieu: Lieu): Observable<Lieu> {
    return this.http.put<Lieu>(`${this.lieuxURL}/${lieu.id}`, lieu);
  }

  deleteLieu(id: number): Observable<any> {
    return this.http.delete(`${this.lieuxURL}/${id}`);
  }
}
