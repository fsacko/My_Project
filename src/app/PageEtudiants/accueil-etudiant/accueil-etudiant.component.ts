import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

@Component({
  selector: 'app-accueil-etudiant',
  templateUrl: './accueil-etudiant.component.html',
  styleUrl: './accueil-etudiant.component.css'
})
export class AccueilEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService){}
  classe:any;
  modules:any;
  descriptionMosule!:string;
  cours:any;
  dataGlobal : Array <any> | any;
  ngOnInit()
  {
    this.data.getEtudiantClasse().subscribe(res =>{
      console.log(res);
      this.dataGlobal = res;
      this.data.dataEtudiant = res;

      console.log(this.dataGlobal);
    });
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
