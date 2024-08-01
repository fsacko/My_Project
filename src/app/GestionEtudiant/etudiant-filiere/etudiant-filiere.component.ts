import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';
import {  Router } from '@angular/router';

import { Subject } from 'rxjs';



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

  dataEtudiant!:Array<any>;
  currentRowId: number | undefined;
  etudiants: any;
  // dtOptions: Config = {};


  constructor (private dataS:DataService, private route : Router){  }



  dtOptions: any = {};
  data: any[] = [];
  dtTrigger: Subject<any> = new Subject<any>();

  // @ViewChild('demoNg')
  // demoNg!: TemplateRef<EtudiantDetailComponent>;
  ngOnInit()
  {

    this.dataS.getEtudiantData().subscribe(res =>{
      this.dataS.dataEtudiants = res;
      this.data = this.dataS.dataEtudiants ;
      this.Filieres = this.dataS.dataEtudiants;
    });
    console.log(this.dataS.dataEtudiants);

  }


  // Recuperer l'ID d'un Etudiant en particulier :
  getEtudiantId(id : any)
  {
    if (id != undefined) {
      // console.log(id);
        for (let i = 0; i < this.Filieres.length; i++) {
          const el = this.Filieres[i];
          console.log(el);
          for (let j = 0; j < el.etudiants.length; j++) {
            const element = el.etudiants[j];
            console.log(element);
            if (element.id === id) {
              this.etudiantForm = element;
              this.etudiantForm.filiere_id = el.id;
              this.IdEtudiant = id;
              console.log(element);
            }
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
