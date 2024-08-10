import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-classe-accueil',
  templateUrl: './classe-accueil.component.html',
  styleUrl: './classe-accueil.component.css'
})
export class ClasseAccueilComponent implements OnInit {

constructor(public spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
