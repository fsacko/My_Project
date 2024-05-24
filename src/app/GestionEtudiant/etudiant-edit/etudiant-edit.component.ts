import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Etudiants } from '../../CLASS/etudiant/etudiants';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrl: './etudiant-edit.component.css'
})
export class EtudiantEditComponent implements OnInit {
  etudiants = new Etudiants;

  constructor(private data:DataService){}
  ngOnInit(): void {}

}

