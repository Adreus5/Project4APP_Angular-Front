import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LieuService } from '../services/lieu.service';
import { NoteLieu } from '../models/lieu.model';

@Component({
  selector: 'app-rate-lieu',
  templateUrl: './rate-lieu.component.html',
  styleUrls: ['./rate-lieu.component.scss']
})
export class RateLieuComponent implements OnInit {
  noteLieu: NoteLieu = { note: 0, commentaire: '', lieuId: 0, utilisateurId: 1 }; // on va mettre par défaut un ID je ne sais pas comment faire l'import pour l'instant

  constructor(private route: ActivatedRoute, private lieuService: LieuService, private router: Router) {}

  ngOnInit(): void {
    this.noteLieu.lieuId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
  }

  submit() {
    this.lieuService.rateLieu(this.noteLieu).subscribe(() => {
      this.router.navigate(['/lieux']);
    });
  }
}
