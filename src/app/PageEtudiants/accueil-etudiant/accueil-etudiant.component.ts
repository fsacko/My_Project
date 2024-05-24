import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrl: './accueil-etudiant.component.css'
})
export class AccueilEtudiantComponent {
  classes =[
    {'nom': 'IG1', 'id': 1, 'desc': 'Informatique de Gestion premiere Année'},
    {'nom': 'IG2', 'id': 2, 'desc': 'Informatique de Gestion deuxieme Année'},
    {'nom': 'PDI', 'id': 3, 'desc': 'Programmation et Developpement Informatique Licence'},
  ];

}
