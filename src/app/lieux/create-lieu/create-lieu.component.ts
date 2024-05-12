import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {LieuService} from "../../services/lieu.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-create-lieu',
  templateUrl: './create-lieu.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf
  ],
  styleUrls: ['./create-lieu.component.scss']
})
export class CreateLieuComponent {
  lieuForm!: FormGroup;
  typesLieu: string[] = ['Restaurant', 'Bar', 'Cinema', 'Parc', 'Musée', 'Monument'];

  constructor(private fb: FormBuilder, private lieuService: LieuService) {
    this.lieuForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      typeLieu: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    if (this.lieuForm.valid) {
      this.lieuService.addLieu(this.lieuForm.value).subscribe({
        next: (lieu) => console.log('Lieu created:', lieu),
        error: (error) => console.error('Error creating lieu:', error)
      });
    }
  }
}
