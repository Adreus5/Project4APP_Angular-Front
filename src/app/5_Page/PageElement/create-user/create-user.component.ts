import {Component} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {Utilisateur} from 'models/user.model';
import {UserService} from "../../../services/user.service";
import {NgIf} from "@angular/common"; // Vérifiez le chemin d'accès

//hi

@Component({
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;


  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      mail: ['', [Validators.required, Validators.email]],
      typeUser: ['Client'] // Défini par défaut à 'Client'
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const newUser: Utilisateur = {
        ...this.userForm.value,
        id: undefined
      };

      this.userService.create(newUser).subscribe({
        next: (user) => {
          console.log('Utilisateur créé avec succès:', user)
        },
        error: (error) => {
          console.error('Erreur lors de la création de l utilisateur:', error)
        }
      });
    }
  }
}
