import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-classe-cours',
  templateUrl: './classe-cours.component.html',
  styleUrl: './classe-cours.component.css'
})
export class ClasseCoursComponent implements OnInit {
  module_id: any;
  dataModule: any|Array<any>;
  dataClasse: any|Array<any>;

  

  constructor(private data:DataService){};
  
  ngOnInit() 
  {


    this.module_id = this.data.module_id;

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

    console.log(this.dataModule);
    console.log(this.dataClasse);

  }

}
