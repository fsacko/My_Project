import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrl: './accueil-etudiant.component.css'
})
export class AccueilEtudiantComponent implements OnInit {
  constructor(private data:EtudiantDataService){}
  ngOnInit()
  {
    this.data.getEtudiantClasse().subscribe(res =>{
      console.log(res);
    }); 
  }
  classes =[
    {'nom': 'IG1', 'id': 1, 'desc': 'Informatique de Gestion premiere Année'},
    {'nom': 'IG2', 'id': 2, 'desc': 'Informatique de Gestion deuxieme Année'},
    {'nom': 'PDI', 'id': 3, 'desc': 'Programmation et Developpement Informatique Licence'},
  ];



}
