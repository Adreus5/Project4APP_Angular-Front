import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';
import { LieuService } from '../services/lieu.service';
import { Film } from '../models/film.model';
import { Lieu } from '../models/lieu.model';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  standalone: true,
  styleUrls: ['./accueil.component.scss'],
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton,
    NgForOf
  ],
})
export class AccueilComponent implements OnInit {
  films: Film[] = [];
  lieux: Lieu[] = [];

  constructor(private filmService: FilmService, private lieuService: LieuService) {}

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
}
