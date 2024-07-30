import { Component } from '@angular/core';
import SimpleBar from 'simplebar';
import { AuthentificationService } from '../../service/authentification.service';
// import { Router } from 'express';
import { DataService } from '../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


  universites:any ;
  currentAction :any;
  elementsName : any;
  users : any;

  constructor(public authService: AuthentificationService, private route : Router, private data:DataService,public xss:DomSanitizer){}

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
    {name :'et',title :"Accueil", route:"", icon:"school"},
    {name :'en',title:"Filieres", route:"", icon:"peop"},
    {name :'mo',title :"Modules", route:"module", icon:"class"},
    {name :'gc',title:"Cours", route:"module/cours", icon:"admin_panel_settings"}

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
  // handleLogout() {
  //   this.authService.logout().subscribe({
  //     next: () => {
  //       this.route.navigate(['/login']);
  //     }
  //   });
  // }



}
