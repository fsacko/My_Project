import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-cours',
  templateUrl: './create-cours.component.html',
  styleUrl: './create-cours.component.css'
})
export class CreateCoursComponent implements OnInit {
  
  public model = {
    editorData: '<p>Hello, world!</p>'
  };

  
  ngOnInit()
  {
    // this.model;
  }
  

}
