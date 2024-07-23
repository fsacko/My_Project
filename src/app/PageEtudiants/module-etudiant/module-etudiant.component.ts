import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

@Component({
  selector: 'app-module-etudiant',
  templateUrl: './module-etudiant.component.html',
  styleUrl: './module-etudiant.component.css'
})
export class ModuleEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService){}
  modules!:Array<any>;

  ngOnInit()
  {
    this.modules = this.data.dataModules;
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
