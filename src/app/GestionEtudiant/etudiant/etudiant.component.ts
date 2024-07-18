import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
succes: any;
constructor(private data:DataService){}

  ngOnInit()
  {
    this.succes = this.data.session_success;
  }


}
