import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';
import { DataService } from '../../service/data.service';
import SimpleBar from 'simplebar';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrl: './accueil-etudiant.component.css'
})
export class AccueilEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService,private dataS:DataService,public spinner: NgxSpinnerService){}

  universites:any ;
  currentAction :any;
  elementsName : any;
  users : any;

  classe:any;
  modules:any;
  descriptionMosule!:string;
  cours:any;
  dataGlobal :any;
  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.data.getEtudiantClasse().subscribe(res => {
      this.data.dataEtudiant = res;
      this.dataGlobal = res;

      console.log(res);
    });

  }


  listeModule(id: any) {
    this.data.filiereID = id;
  }

}
