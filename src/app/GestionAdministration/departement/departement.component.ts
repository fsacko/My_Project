import { Component } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.css'
})
export class DepartementComponent {
  ecoles =[
    {'nom': 'Intec', 'id': 1, 'lieu': 'Hippodrome'},
    {'nom': 'Ecosup', 'id': 2, 'lieu': 'djelibougou'},
    {'nom': 'UBS', 'id': 3, 'lieu': 'Korofina'},
    {'nom': 'Intec', 'id': 4, 'lieu': 'ACI'},
    {'nom': 'ESC', 'id': 5, 'lieu': 'Kalaban'},
  ];
}
