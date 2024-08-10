import { Component, OnInit } from '@angular/core';
import SimpleBar from 'simplebar';
import { DataService } from '../../service/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
  host: {'some-binding': 'atudiant-acceuil'}
})
export class EtudiantComponent implements OnInit {
succes: any;
constructor(private data:DataService,private spinner: NgxSpinnerService){}

  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.succes = this.data.session_success;
  }


}
