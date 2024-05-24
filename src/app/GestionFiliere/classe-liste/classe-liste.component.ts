import { Component, OnInit } from '@angular/core';
import { Classe } from '../../CLASS/classe/classe';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-liste',
  templateUrl: './classe-liste.component.html',
  styleUrl: './classe-liste.component.css'
})
export class ClasseListeComponent implements OnInit {

  filieres : any | Array <any>;
  constructor(private data:DataService, private route:Router){};

  ngOnInit(): void {
    this.data.getClasseData().subscribe(res =>{
      this.filieres = res;
    })
  }

  filiereDetails(id: any) {
    this.data.getClasseById(id).subscribe(res =>
      {
        this.data.detailFiliere = res;
        this.route.navigate(['gestion/Filieres/voir_plus']);
        console.log(res);
        
      });
  }
}
