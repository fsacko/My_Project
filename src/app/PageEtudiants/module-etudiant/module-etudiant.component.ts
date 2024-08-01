import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

@Component({
  selector: 'app-module-etudiant',
  templateUrl: './module-etudiant.component.html',
  styleUrl: './module-etudiant.component.css'
})
export class ModuleEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService){
  }
  modules!:Array<any>;

  ngOnInit()
  {

    if (this.data.dataModules != null) {
      this.modules = this.data.dataModules;
      // this.data.dataCours = this.data.dataModules.descriptions.cours;//Pour la liste des Cours en fonction avec ses contenus

    }
    else
    {

      for (let i = 0; i < this.data.dataEtudiant.length; i++) {
        const element = this.data.dataEtudiant[i];//Pour la liste des Filieres avec ses contenus

        for (let j = 0; j < element.filieres.length; j++) {
          const elem = element.filieres[j];
            this.modules = elem.modules;//Pour la liste des modules avec ses cours:
        }

      }
    }


  }


  listeCour(id: any) {
    for (let i = 0; i < this.data.dataModules.length; i++) {
      const element = this.modules[i];
      if (element.id == id) {
        this.data.dataModules = element;
        this.data.dataCours = element.descriptions.cours;//Pour la liste des Cours en fonction avec ses contenus
      }

    }
  }

}
