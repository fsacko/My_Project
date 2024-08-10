import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-module-liste',
  templateUrl: './module-liste.component.html',
  styleUrl: './module-liste.component.css'
})
export class ModuleListeComponent implements OnInit {
  modules: any|Array<any>;
  constructor(private data:DataService,private route:Router,public spinner: NgxSpinnerService){}


  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.data.getData('listeModule').subscribe(data => {
      this.modules = data;
      console.log(this.modules);
    });
  }

}
