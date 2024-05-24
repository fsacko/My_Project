import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';

@Component({
  selector: 'app-etudiant-create',
  templateUrl: './etudiant-create.component.html',
  styleUrl: './etudiant-create.component.css'
})
export class EtudiantCreateComponent implements OnInit  {

  etudiant = new Etudiants;

  constructor(private data:DataService){}

  ngOnInit(): void {}
  insertEtudiant(){
    this.data.insertEtudiantData(this.etudiant).subscribe(res=>{
      console.log(res);
    });
    // console.log(this.etudiant);
  }

}
