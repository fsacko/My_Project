import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit {


  universites:any ;
  currentAction :any;
  elementsName : any;
  users : any;

  constructor(public authService: AuthentificationService, private route : Router, private data:DataService){}

  ngOnInit(): void {

    this.data.getUniversite().subscribe(res =>{
      this.universites = res;
      const universite_nom = res;
      this.data.universite_nom = this.universites.nom;
      console.log(res);
    } );
    this.users = this.data.users;
    console.log( this.users);



  }

  // title = 'front-endMemoire';
  navElements  = [
    {name :'administrations',title :"Departement", route:"departement", icon:"school"},
    {name :'enseignants',title:"Enseignants", route:"professeur", icon:"peop"},
    {name :'',title :"Gestions", route:"gestion", icon:"class"},
    {name :'administrations',title:"Direction", route:"direction", icon:"admin_panel_settings"}

  ];

  changer(element: string) {
    for (let i = 0; i < this.navElements.length; i++) {
      const line = this.navElements[i];
      if (line.name === element) {
        this.currentAction = line;
      }

    }
  }



  // Pour le logOut :
  handleLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.route.navigate(['/login']);
      }
    });
  }



}
