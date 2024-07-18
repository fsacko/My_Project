import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-filiere',
  templateUrl: './etudiant-filiere.component.html',
  styleUrl: './etudiant-filiere.component.css'
})
export class EtudiantFiliereComponent implements OnInit {
  Etudiants: any | Array <any>;
  IdEtudiant:any;
  etudiantForm = new Etudiants;


  constructor (private data:DataService, private route : Router){  }

  ngOnInit(): void {
    this.data.getEtudiantData().subscribe(res=>{
      this.Etudiants = res;
      console.log(res);
    });
  }
// Afficher la liste des etudiants :

  // Recuperer l'ID d'un Etudiant en particulier :
  getEtudiantId(id : any){
    if (id != undefined) {

      this.Etudiants.forEach((element: any | Array <any>) => {
        for (let i = 0; i < element.length; i++) {
          const el = element[i];
          if (el.id === id) {
            this.etudiantForm = el;
            this.IdEtudiant = id;
            console.log(el);
          }
        }
      });
    }

  }

  // Pour Modifier l'etudiant en question :
  updateEtudiant(){
    this.data.updateEtudiant(this.IdEtudiant,this.etudiantForm).subscribe(res => {
      this.route.navigate(['/etudiant/filiere']);
    });
  }

  // Pour la supression d'un Etudiant :
  delete(id: any) {
    // console.log(id);
    this.data.deleteEtudiant(id).subscribe(res => {
      this.route.navigate(['/etudiant/filiere']);
    });
  }

}
