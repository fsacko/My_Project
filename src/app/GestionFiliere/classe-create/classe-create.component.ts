import { Component, OnInit } from '@angular/core';
import { Classe } from '../../CLASS/classe/classe';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrl: './classe-create.component.css'
})
export class ClasseCreateComponent implements OnInit  {

  filiere = new Classe;

  constructor(private data:DataService){};
  ngOnInit(): void {

  }
  addFiliere() {
    this.data.insertClasse(this.filiere).subscribe();
  }

}
