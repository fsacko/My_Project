import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../service/authentification.service';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import SimpleBar from 'simplebar';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../../service/auth/auth.service';

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

  constructor(public authService: AuthService, private route : Router, private data:DataService,public xss:DomSanitizer,public spinner: NgxSpinnerService){}

  ngOnInit() {

    this.data.getUniversite().subscribe(res =>{
      this.universites = res;
      const universite_nom = res;
      this.data.universite_nom = this.universites.nom;
      console.log(res);
    } );
    this.users = this.data.users;
    console.log( this.users);

    this.initialize();
    /** spinner starts on init */
    this.spinner.show(

    );

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 10000);



    // Wait until page is loaded
    // document.addEventListener("DOMContentLoaded", () => initialize());


  }
  initialize()
  {
    this.initializeSimplebar();
    this.initializeSidebarCollapse();
  }

  initializeSimplebar()
  {
    const simplebarElement:HTMLCollectionOf<Element> = document.getElementsByClassName("js-simplebar");

    if(simplebarElement){
      const simpleNav = simplebarElement[0] as HTMLElement
      const simplebarInstance = new SimpleBar(simpleNav);

      /* Recalculate simplebar on sidebar dropdown toggle */
      const sidebarDropdowns = document.querySelectorAll(".js-sidebar [data-bs-parent]");

      sidebarDropdowns.forEach(link => {
        link.addEventListener("shown.bs.collapse", () => {
          simplebarInstance.recalculate();
        });
        link.addEventListener("hidden.bs.collapse", () => {
          simplebarInstance.recalculate();
        });
      });
    }
  }

  initializeSidebarCollapse()
  {
    const sidebarElement:HTMLCollectionOf<Element> = document.getElementsByClassName("js-sidebar");
    const sidebarToggleElement:HTMLCollectionOf<Element>  = document.getElementsByClassName("js-sidebar-toggle");

    if(sidebarElement && sidebarToggleElement) {
      const sideBto = sidebarToggleElement[0] as HTMLElement;
      const sideEl = sidebarElement[0] as HTMLElement;
      sideBto.addEventListener("click", () => {
        sideEl.classList.toggle("collapsed");

        sideEl.addEventListener("transitionend", () => {
          window.dispatchEvent(new Event("resize"));
        });
      });
    }
  }

  // title = 'front-endMemoire';
  navElements  = [
    {name :'tb',title :"Tableau de Board", route:"", icon:"home"},
    {name :'et',title :"Etudiants", route:"gestion/Etudiants", icon:"school"},
    {name :'en',title:"Filieres", route:"gestion/Filieres", icon:"peop"},
    {name :'mo',title :"Modules", route:"gestion/Modules", icon:"class"},
    {name :'gc',title:"Gestion des Cours", route:"gestion", icon:"admin_panel_settings"}

  ];

  changer(element: string) {
    for (let i = 0; i < this.navElements.length; i++) {
      const line = this.navElements[i];
      if (line.name === element) {
        this.currentAction = line;
      }

    }
  }

  side(){
    const navbar: HTMLCollectionOf<Element> = document.getElementsByClassName('nav');
    if (navbar.length > 0) {
      const navElement = navbar[0] as HTMLElement;
      if (navElement.classList.contains('show')) {
        navElement.classList.remove('show');
      } else {
        navElement.classList.add('show');
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
