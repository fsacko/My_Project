import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import {  Router } from '@angular/router';

import { Subject } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-etudiant-filiere',
  templateUrl: './etudiant-filiere.component.html',
  styleUrl: './etudiant-filiere.component.css'
})
export class EtudiantFiliereComponent implements OnInit {

  // @ViewChild('editModal') editModal: TemplateRef<any> | undefined;
  Filieres: any | Array <any>;
  IdEtudiant:any;
  etudiantForm = new Etudiants;
  listeFiliere:any | Array<any>;

  dataEtudiant!:Array<any>;
  currentRowId: number | undefined;
  etudiants: any;
  annee: any;
universites: any;
  // dtOptions: Config = {};


  constructor (private dataS:DataService, private route : Router,public spinner: NgxSpinnerService){  }



  dtOptions: any = {};
  data: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  // @ViewChild('demoNg')
  // demoNg!: TemplateRef<EtudiantDetailComponent>;
  ngOnInit()
  {

    /** spinner starts on init */
    this.spinner.show(

    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    this.dataS.getEtudiantData().subscribe(res =>{
      this.dataS.dataEtudiants = res;
      this.data = this.dataS.dataEtudiants ;
      this.Filieres = res;
      console.log(res);
    });

    this.dataS.getClasseData().subscribe(data =>{
      this.listeFiliere = data;
    });

    this.etudiantForm.universite_id = this.dataS.users.universite_id;
    this.annee = this.dataS.annee_scolaire;
  }


  // Recuperer l'ID d'un Etudiant en particulier :
  getEtudiantId(id : any)
  {
    if (id != undefined) {
      // console.log(id);
        for (let i = 0; i < this.Filieres.length; i++) {
          const el = this.Filieres[i];
          console.log(el);
          if (el.id === id) {
            this.etudiantForm = el;
            this.etudiantForm.filiere_id = el.filiere_id;
            this.IdEtudiant = id;
            console.log(el);
          }
        }
    }
    else
    {
      console.log('ID etudiant Non prise en compte !!')
    }

  }

  // Pour Modifier l'etudiant en question :
  updateEtudiant()
  {
    this.dataS.updateEtudiant(this.IdEtudiant,this.etudiantForm).subscribe(res => {
      this.route.navigate(['getsion/Etudiant/filiere']);
    });
  }

  // Pour la supression d'un Etudiant :
  delete(id: any,filiere_id: any)
  {
    // console.log(id);
    this.dataS.deleteEtudiant(id,filiere_id).subscribe(res => {
      if (res.statut != 200) {
        console.log('Erreur de suppression');
      }
      else{
        this.route.navigate(['gestion/Etudiants']);
      }
    });
  }
}
