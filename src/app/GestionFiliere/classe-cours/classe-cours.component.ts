import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-classe-cours',
  templateUrl: './classe-cours.component.html',
  styleUrl: './classe-cours.component.css'
})
export class ClasseCoursComponent implements OnInit {

  module_id: any;
  dataModule: any|Array<any>;
  dataClasse: any|Array<any>;
  modules:any;
  moduleForm!: FormGroup;



  constructor(private data:DataService,private router:Router,private formB:FormBuilder){};

  ngOnInit()
  {


    this.module_id = this.data.module_id;
    this.data.getModule(this.data.filiere_id).subscribe(res =>{
      this.modules = res;
    });

    this.dataModule = this.data.moduleData;

    for (let i = 0; i < this.dataModule.length; i++) {
      this.dataClasse = this.dataModule[i];
      const element = this.dataModule[i].modules;
      for (let j = 0; j < element.length; j++) {
        const module = element[j];
        if (module.id == this.module_id) {
          this.dataModule = [module];
        }

      }

    }
    this.moduleForm = this.formB.group({
      module_id: this.formB.control('',Validators.required)
    });
    // console.log(this.dataModule);
    // console.log(this.dataClasse);

  }
  moduleChange() {
    this.dataModule = this.data.moduleData;

    for (let i = 0; i < this.dataModule.length; i++) {
      this.dataClasse = this.dataModule[i];
      const element = this.dataModule[i].modules;
      for (let j = 0; j < element.length; j++) {
        const module = element[j];
        if (module.id == this.module_id) {
          this.dataModule = [module];
        }

      }
    }
    this.data.module_id = this.moduleForm.value.module_id;
    this.router.navigate(['gestion/Cours'])
  }

}
