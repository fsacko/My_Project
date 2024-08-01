import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';
import { DataService } from '../../service/data.service';
import SimpleBar from 'simplebar';

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrl: './accueil-etudiant.component.css'
})
export class AccueilEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService,private dataS:DataService){}

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
    this.dataGlobal = this.data.dataEtudiant;
    console.log(this.dataGlobal);

  }


  listeModule(id: any) {
    for (let i = 0; i < this.data.dataEtudiant.length; i++) {
      const element = this.data.dataEtudiant[i];//Pour la liste des Filieres avec ses contenus

      for (let j = 0; j < element.filieres.length; j++) {
        const elem = element.filieres[j];
        if (elem.id == id) {
          this.data.dataModules = elem.modules;//Pour la liste des modules avec ses cours:
        }

      }

    }
  }

}
