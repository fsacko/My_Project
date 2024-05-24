import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';

@Component({
  selector: 'app-etudiant-liste',
  templateUrl: './etudiant-liste.component.html',
  styleUrl: './etudiant-liste.component.css'
})
export class EtudiantListeComponent implements OnInit {

  //etudiants = new Etudiants();
   etudiants :any | Array<any>;
  constructor (private data:DataService){  }

  ngOnInit(): void {
    this.data.getEtudiantData().subscribe(res=>{
      console.log(res);
      this.etudiants = res;
    });
  }

  getEtudiantListe(){
    this.data.getEtudiantData().subscribe(res=>{
      console.log(res);
      this.etudiants = res;
    });
  };
}
