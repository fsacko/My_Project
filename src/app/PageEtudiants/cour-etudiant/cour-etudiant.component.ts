import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

@Component({
  selector: 'app-cour-etudiant',
  templateUrl: './cour-etudiant.component.html',
  styleUrl: './cour-etudiant.component.css'
})
export class CourEtudiantComponent implements OnInit{
  cours: any;
  modules: any;

  constructor(private data:EtudiantDataService){
    this.cours = this.data.dataCours;
  }

  ngOnInit()
  {
    this.cours = this.data.dataCours;
    this.modules = this.data.dataModules;
  }


}
