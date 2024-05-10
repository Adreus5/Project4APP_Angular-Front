// src/app/lieuDetails/lieu-details.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LieuService } from '../services/lieu.service';
import { NoteLieuService } from '../services/note-lieu.service';
import { Lieu } from '../models/lieu.model';
import { NoteLieu } from '../models/note-lieu.model';
import { AuthService } from '../services/auth.service';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'lieu-details',
  templateUrl: './lieu-details.html',
  styleUrls: ['./lieu-details.scss'],
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  standalone: true
})
export class LieuDetailsComponent implements OnInit {
  lieu: Lieu | undefined;
  notesLieu: NoteLieu[] = [];
  newNote: NoteLieu = {
    lieuId: 0,
    utilisateurId: 0,
    note: 0,
    commentaire: ''
  };

  constructor(
    private route: ActivatedRoute,
    private lieuService: LieuService,
    private noteLieuService: NoteLieuService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const lieuId = parseInt(this.route.snapshot.params['id'], 10);
    if (!isNaN(lieuId)) {
      this.lieuService.findById(lieuId).subscribe({
        next: (lieu) => {
          this.lieu = lieu;
          this.newNote.lieuId = Number(lieu.id ?? 0); // Conversion en number
        },
        error: (error) => console.error('Erreur lors du chargement du lieu', error)
      });

      this.noteLieuService.findByLieuId(lieuId).subscribe({
        next: (notes) => {
          this.notesLieu = notes;
        },
        error: (error) => console.error('Erreur lors du chargement des notes du lieu', error)
      });

      const currentUser = this.authService.getCurrentUser();
      if (currentUser) {
        this.newNote.utilisateurId = Number(currentUser.id);
      }
    }
  }

  saveNote(): void {
    if (this.newNote.note > 0 && this.newNote.note <= 5) {
      this.noteLieuService.addNoteToLieu(this.newNote).subscribe({
        next: (note) => {
          this.notesLieu.push(note);
          this.newNote.note = 0;
          this.newNote.commentaire = '';
        },
        error: (error) => console.error('Erreur lors de l\'enregistrement de la note', error)
      });
    }
  }
}
