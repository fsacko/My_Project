import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';

@Component({
  selector: 'app-etudiant-filiere',
  templateUrl: './etudiant-filiere.component.html',
  styleUrl: './etudiant-filiere.component.css'
})
export class EtudiantFiliereComponent implements OnInit {
  Etudiants: any;
  IdEtudiant:any;
  etudiantForm = new Etudiants;


  constructor (private data:DataService){  }

  ngOnInit(): void {
    this.data.getEtudiantData().subscribe(res=>{
      this.Etudiants = res;
    });
  }
// Afficher la liste des etudiants :

  // Recuperer l'ID d'un Etudiant en particulier :
  getEtudiantId(id : any){
    if (id != undefined) {
      for (let i = 0; i < this.Etudiants.length; i++) {
        const element = this.Etudiants[i];
        if (element.id === id) {
          this.etudiantForm = element;
          this.IdEtudiant = id;
        }
      }
    }
  }

  // Pour Modifier l'etudiant en question :
  updateEtudiant(){
    this.data.updateEtudiant(this.IdEtudiant,this.etudiantForm).subscribe(res=>{
      console.log("c'est bien Modifier");
    })
  }

  // Pour la supression d'un Etudiant :
  delete(id: any) {
    // console.log(id);
    this.data.deleteEtudiant(id).subscribe();
  }

}
