import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  implements OnInit {
getModuleId(arg0: any) {
throw new Error('Method not implemented.');
}
moduleDetails(arg0: any) {
throw new Error('Method not implemented.');
}
  filieres: any|Array<any>;
  constructor(private data:DataService,public spinner: NgxSpinnerService){}

  ngOnInit()
  {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    this.filieres = this.data.detailFiliere;
    console.log(this.filieres);
  }

}
