import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-classe-details',
  templateUrl: './classe-details.component.html',
  styleUrl: './classe-details.component.css'
})
export class ClasseDetailsComponent implements OnInit{

  constructor(public spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

}
