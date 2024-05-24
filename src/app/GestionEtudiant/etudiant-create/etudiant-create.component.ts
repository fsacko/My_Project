import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import { Console } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrl: './etudiant-create.component.css'
})
export class EtudiantCreateComponent implements OnInit  {

  etudiant = new Etudiants;
  listeFiliere:any | Array<any>;
  universites: any;
  annee:any | Array<any>;

  constructor(private data:DataService, private route:Router){}

  ngOnInit(): void {
    this.listeFiliere = this.data.filiereListe;
    this.etudiant.universite_id = this.data.users.universite_id;
    this.annee = this.data.annee_scolaire;
  }
  insertEtudiant(){
    console.log(this.etudiant);
    this.data.insertEtudiantData(this.etudiant).subscribe(res=>{
      const redirect = res.redirect;
      this.route.navigate([redirect]);
    });

    // console.log(this.etudiant);
  }

}
