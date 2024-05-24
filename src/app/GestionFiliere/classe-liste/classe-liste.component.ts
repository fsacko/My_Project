import { Component, OnInit } from '@angular/core';
import { Classe } from '../../CLASS/classe/classe';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-classe-liste',
  templateUrl: './classe-liste.component.html',
  styleUrl: './classe-liste.component.css'
})
export class ClasseListeComponent implements OnInit {

  filieres : any;
  constructor(private data:DataService){};

  ngOnInit(): void {
    this.listeFilieres() ;
  }
  listeFilieres(){
    this.data.getClasseData().subscribe(res =>{
      this.filieres = res;
    })
  }
}
