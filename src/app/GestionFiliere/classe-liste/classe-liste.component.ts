import { Component, OnInit } from '@angular/core';
import { Classe } from '../../CLASS/classe/classe';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-classe-liste',
  templateUrl: './classe-liste.component.html',
  styleUrl: './classe-liste.component.css'
})
export class ClasseListeComponent implements OnInit {

  filieresMod = new Classe;
  idF : any;
  niveau = [
    {name:'L1',value:'Licence I'},{name:'L2',value:'Licence II'},{name:'DUT',value:'DUT'},{name:'LCENCE',value:'Licence'},{name:'M-1',value:'Master I'},{name:'M-2',value:'Master II'},{name:'MBA',value:'MBA'},{name:'PhD',value:'Post-Doctorat'},{name:'DOCTORAT',value:'Doctorat'}
  ];


  filieres : any | Array <any>;
  constructor(private data:DataService, private route:Router,public spinner: NgxSpinnerService){};

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.data.getClasseData().subscribe(res =>{
      this.filieres = res;
      console.log(res);
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


  getFiliereId(id : any)
  {
    if (id != undefined) {
      // console.log(id);
        for (let i = 0; i < this.filieres.length; i++) {
          var el = this.filieres[i];
          // console.log(el);
          for (let j = 0; j < el.length; j++) {
            const element = el[j];
           if (element.id == id) {
             this.filieresMod.Nom = element.nom;
             this.filieresMod.Sigle = element.sigle;
             this.filieresMod.universite_id = element.universite_id;
             this.idF = element.id;
             for (let j = 0; j < element.promotions.length; j++) {
              const ele = element.promotions[j];
              if (ele) {
                this.filieresMod.Description = ele.description;
                this.filieresMod.Niveau = ele.niveau;
              }

             }
           }
          }
        }
    }
    else
    {
      console.log('ID etudiant Non prise en compte !!')
    }

  }

  updateFiliere() {
    this.data.updateFiliere(this.idF,this.filieresMod).subscribe(res =>{
      if (res.success) {
        console.log(this.filieresMod);
      }
    });
    this.route.navigate(['gestion/Filieres/liste']);
  }

  delete(filiere_id: any) {
    console.log(this.idF);
    this.data.deleteFiliere(this.idF).subscribe(res =>{
      if (res.success) {

        this.route.navigate([res.redirect]);
      }
    });
  }

}
