import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-etudiant-liste',
  templateUrl: './etudiant-liste.component.html',
  styleUrl: './etudiant-liste.component.css'
})
export class EtudiantListeComponent implements OnInit {
 
  etudiants: any;

  constructor (private data:DataService){  }

  ngOnInit(): void {
    this.getEtudiantListe();
  }

  getEtudiantListe(){
    this.data.getEtudiantData().subscribe(res=>{
      this.etudiants = res;
    });
  }
}
