import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Idrecuper } from './IDrecuper';

@Component({
  selector: 'app-etudiant-detail',
  templateUrl: './etudiant-detail.component.html',
  styleUrl: './etudiant-detail.component.css'
})
export class EtudiantDetailComponent  implements OnInit,OnDestroy{
  constructor() {}

  @Output()
  emitter = new Subject<Idrecuper>();

  @Input()
  data = {};

  onAction() {
    this.emitter.next({
      cmd: "Detail",
      data: this.data,
    });
  }

  ngOnInit(): void {

  }



  ngOnDestroy(): void {
    this.emitter.unsubscribe()
  }

}
