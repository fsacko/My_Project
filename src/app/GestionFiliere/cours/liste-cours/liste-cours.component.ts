import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../service/data.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrl: './liste-cours.component.css'
})
export class ListeCoursComponent implements OnInit {

  

  constructor(private data:DataService){};
  module_id:any;
  ngOnInit(): void {
    
 
  }

}
