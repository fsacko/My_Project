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
  niveau = [
    {name:'L1',value:'Licence I'},{name:'L2',value:'Licence II'},{name:'DUT',value:'DUT'},{name:'LCENCE',value:'Licence'},{name:'M-1',value:'Master I'},{name:'M-2',value:'Master II'},{name:'MBA',value:'MBA'},{name:'PhD',value:'Post-Doctorat'},{name:'DOCTORAT',value:'Doctorat'}
  ];
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
