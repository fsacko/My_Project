import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrl: './etudiant-edit.component.css'
})
export class EtudiantEditComponent implements OnInit {
  etudiants = new Etudiants;
  listeFiliere:any | Array<any>;
  universites: any;
  errors:any|Array<any>;
  annee:any | Array<any>;

  constructor(private data:DataService,private route:Router){}
  ngOnInit(): void {
    this.data.getClasseData().subscribe(data =>{
      this.listeFiliere = data;
    });
    this.etudiants.universite_id = this.data.users.universite_id;
    this.annee = this.data.annee_scolaire;
  }


  insertEtudiant(){
    console.log(this.etudiants);
    this.data.insertEtudiantData(this.etudiants).subscribe(res=>{
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

