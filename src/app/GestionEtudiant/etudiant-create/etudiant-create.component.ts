import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
// import { CKEditor4 } from 'ckeditor4-angular';
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
  errors:any|Array<any>;
  annee:any | Array<any>;

  constructor(private data:DataService, private route:Router){}

  ngOnInit(): void {
    // this.listeFiliere = this.data.filiereListe;
    this.data.getClasseData().subscribe(data =>{
      this.listeFiliere = data;
    });
    this.etudiant.universite_id = this.data.users.universite_id;
    this.annee = this.data.annee_scolaire;
  }
  insertEtudiant(){
    console.log(this.etudiant);
    this.data.insertEtudiantData(this.etudiant).subscribe(res=>{
      const redirect = res.redirect;
      if(res.success){
        this.data.session_success = res.success;
        this.route.navigate([redirect]);
      }
      else{
        this.errors = res.error;
      }
    });

    // console.log(this.etudiant);
  }

}
