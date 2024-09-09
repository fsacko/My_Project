import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
// import { CKEditor4 } from 'ckeditor4-angular';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

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

  constructor(private data:DataService, private route:Router,public spinner: NgxSpinnerService){}

  ngOnInit(): void {
    // this.listeFiliere = this.data.filiereListe;
    this.spinner.show(

    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
    this.data.getClasseData().subscribe(data =>{
      this.listeFiliere = data;
    });
    this.etudiant.universite_id = localStorage.getItem('users');
    this.annee = this.data.annee_scolaire;
    /** spinner starts on init */
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
