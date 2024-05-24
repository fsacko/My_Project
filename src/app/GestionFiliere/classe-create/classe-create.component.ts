import { Component, OnInit } from '@angular/core';
import { Classe } from '../../CLASS/classe/classe';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrl: './classe-create.component.css'
})
export class ClasseCreateComponent implements OnInit  {

  filiere = new Classe;
  universite : any;
  constructor(private data:DataService,private route:Router){};
  ngOnInit(): void {
    this.data.getUniversite().subscribe(res => {
      this.universite = res
    });
    this.filiere.universite_id = this.data.users.universite_id;
  }
  addFiliere() {
    // console.log(this.filiere);
    this.data.insertClasse(this.filiere).subscribe(res => {
      const redirect = res.redirect;
      this.route.navigate([redirect]); 
    });
  }

}
