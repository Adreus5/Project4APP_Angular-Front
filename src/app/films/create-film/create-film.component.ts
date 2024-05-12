import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FilmService} from "../../services/film.service";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./create-film.component.scss']
})
export class CreateFilmComponent {
  filmForm!: FormGroup;
  genres: string[] = ['Action', 'Comédie', 'Horreur', 'Drame', 'Romance'];
  langues: string[] = ['Français', 'Anglais'];

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.filmForm = this.fb.group({
      nomFilm: ['', Validators.required],
      genre: ['', Validators.required],
      langue: ['', Validators.required],
      realisateur:[''],
      synopsis: ['']
    });
  }

  onSubmit(): void {
    if (this.filmForm.valid) {
      this.filmService.addFilm(this.filmForm.value).subscribe({
        next: (film) => console.log('Film created:', film),
        error: (error) => console.error('Error creating film:', error)
      });
    }
  }
}
