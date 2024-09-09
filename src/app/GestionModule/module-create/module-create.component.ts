import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { Module } from '../../CLASS/module';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrl: './module-create.component.css'
})
export class ModuleCreateComponent implements OnInit {

  module = new Module();
  classeData: any|Array<any>;
  universites: any;
  constructor(private data:DataService,private route:Router,public spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.data.getUniversite().subscribe(res =>{
      this.universites = res;
    } );
    this.module.universite_id =  localStorage.getItem('users');

    this.data.getClasseData().subscribe(data =>{
      this.classeData = data;
    });
    console.log(this.classeData);
  }



  insertModule() {
    this.data.insertModule(this.module).subscribe(res =>{
      const redirect = res;
      this.route.navigate(["gestion/Filieres/liste"]);
    });
  }

}
