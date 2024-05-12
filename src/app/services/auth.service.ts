import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Utilisateur} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: Utilisateur | null = null;
  private apiUrl = 'http://localhost:8080/utilisateurs'; // URL de votre API

  constructor(private http: HttpClient) {}

  login(mail: string): Observable<Utilisateur | null> {
    return this.http.get<Utilisateur>(`${this.apiUrl}/mail?mail=${mail}`).pipe(
      map(user => {
        console.log('User found:', user); // Ajoutez ceci pour voir l'objet utilisateur
        if (user) {
          this.currentUser = user;
          return user;
        }
        return null;
      }),
      catchError((error) => {
        console.error('Error fetching user data:', error);
        return of(null); // Retourne un Observable qui émet `null` si une erreur survient
      })
    );
  }


  getCurrentUser(): Utilisateur | null {
    return this.currentUser;
  }

  isAdmin(): boolean {
    // Vérifie si l'utilisateur courant est administrateur
    return this.currentUser?.typeUser === 'Admin';
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logout(): void {
    this.currentUser = null;

  }
}

