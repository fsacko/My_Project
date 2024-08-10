import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-edite-cours',
  templateUrl: './edite-cours.component.html',
  styleUrl: './edite-cours.component.css'
})
export class EditeCoursComponent implements OnInit {
  delete(arg0: any) {
  throw new Error('Method not implemented.');
  }
  update(arg0: any) {
  throw new Error('Method not implemented.');
  }
  cours: any[] = [];


  constructor(private data:DataService, public xss:DomSanitizer,public spinner: NgxSpinnerService){};

    ngOnInit(): void {
      this.spinner.show();

      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.data.getCourData(this.data.filiere_id,this.data.module_id).subscribe(res =>{
        this.cours = res;
      });

    }

}
