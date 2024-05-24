import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  implements OnInit {
  filieres: any|Array<any>;
  constructor(private data:DataService){}

  ngOnInit()
  {
    this.filieres = this.data.detailFiliere;
    console.log(this.filieres);
  }

}
