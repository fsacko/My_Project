import { Component, OnInit } from '@angular/core';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-module-etudiant',
  templateUrl: './module-etudiant.component.html',
  styleUrl: './module-etudiant.component.css'
})
export class ModuleEtudiantComponent implements OnInit {

  constructor(private data:EtudiantDataService,public spinner: NgxSpinnerService){
  }
  modules!:Array<any>;

  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    if (this.data.filiereID != 0) {
      var id = this.data.filiereID;

      this.data.getEtudiantModuleBy(id).subscribe(res =>{
        this.modules = res;
      });
      this.data.filiereID = 0;
    }
    else{
      this.data.getEtudiantModule().subscribe(res => {
        this.modules = res;
        console.log(res);
      });
    }
  }


  listeCour(id: any) {
    this.data.moduleID = id;
  }

}
