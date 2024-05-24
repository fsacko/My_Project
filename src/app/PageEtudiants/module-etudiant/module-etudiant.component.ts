import { Component } from '@angular/core';

@Component({
  selector: 'app-module-etudiant',
  templateUrl: './module-etudiant.component.html',
  styleUrl: './module-etudiant.component.css'
})
export class ModuleEtudiantComponent {

  modules =[
    {'nom': 'IONIC', 'id': 1, 'desc': 'C\'est le module dedié a la programmation Mobile Hybride'},
    {'nom': 'LARAVEL', 'id': 2, 'desc': 'C\'est le module dedié a la programmation Web coté Serveur'},
    {'nom': 'JAVASCRIPT', 'id': 3, 'desc': 'C\'est le module dedié a la programmation Web coté Client'},
    {'nom': 'ANDROID', 'id': 4, 'desc': 'C\'est le module dedié a la programmation Android Mobile'},
    {'nom': 'GENIE LOGICIEL', 'id': 5, 'desc': 'C\'est le module qui vous enseigne a la programmation'},
  ];

}
