import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { LieuService } from '../services/lieu.service';
import { Film } from '../models/film.model';
import { Lieu } from '../models/lieu.model';
import { Router } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  standalone: true,
  styleUrls: ['./accueil.component.scss'],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
})
export class AccueilComponent implements OnInit {
  films: Film[] = [];
  lieux: Lieu[] = [];

  constructor(
    private filmService: FilmService,
    private lieuService: LieuService,
    private router: Router  // Inject Router for navigation
  ) {}

  ngOnInit(): void {
    this.loadFilms();
    this.loadLieux();
  }

  private loadFilms() {
    this.filmService.findAll().subscribe(films => {
      this.films = films;
    });
  }

  private loadLieux() {
    this.lieuService.findAll().subscribe(lieux => {
      this.lieux = lieux;
    });
  }

  navigateToRateFilm(filmId?: number): void {
    if (filmId !== undefined) {
      this.router.navigate(['/rate-film', Number(filmId)]);
    }
  }

  navigateToRateLieu(lieuId?: number | bigint): void {
    if (lieuId !== undefined) {
      this.router.navigate(['/rate-lieu', Number(lieuId)]);
    }
  }

}
