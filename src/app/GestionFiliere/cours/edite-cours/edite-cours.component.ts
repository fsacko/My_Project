import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Component({
  selector: 'app-edite-cours',
  templateUrl: './edite-cours.component.html',
  styleUrl: './edite-cours.component.css'
})
export class EditeCoursComponent implements OnInit {
// desactive: any;
  cours: any[] = [];


  constructor(private data:DataService, public xss:DomSanitizer,public spinner: NgxSpinnerService,private router:Router){};

    ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.data.getCourData(this.data.filiere_id,this.data.module_id).subscribe(res =>{
        this.cours = res;
        console.log(this.cours);
      });

    }

    active(id: any) {
      this.data.activeCour(id).subscribe(res=>{
        if (res.statut == 200) {
          console.log('Activation prise en charge');
          this.router.navigate(["gestion/Cours/liste"]);
        }
        else{
        }
      });
      console.log('Activation non prise en charge');

    }

    desactive(id: any) {
      this.data.desactiveCour(id).subscribe(res=>{
        if (res.statut == 200) {
          this.router.navigate(["gestion/Cours/liste"]);
        }
        else{
          console.log('Desactivation non prise en charge');
        }
      })
    }
    delete(arg0: any) {

    }
    update(arg0: any) {

    }

}
