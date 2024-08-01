import { Component } from '@angular/core';
import SimpleBar from 'simplebar';
import { AuthentificationService } from '../../service/authentification.service';
// import { Router } from 'express';
import { DataService } from '../../service/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

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

  constructor(public authService: AuthentificationService, private route : Router, private data:DataService,public xss:DomSanitizer,private dataS:EtudiantDataService){}

  ngOnInit() {

    this.data.getUniversite().subscribe(res =>{
      this.universites = res;
      this.data.universite_nom = this.universites.nom;
    } );
    this.users = this.data.users;

    this.initialize();


    this.dataS.getEtudiantClasse().subscribe(res => {
      this.dataS.dataEtudiant = res.global;
      console.log(res.global);
    });
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
    {name :'et',title :"Accueil", route:"Accueil", icon:"school"},
    {name :'en',title:"Filieres", route:"Classe", icon:"peop"},
    {name :'mo',title :"Modules", route:"Classe/Module", icon:"class"},
    {name :'gc',title:"Cours", route:"Classe/Module/Cours", icon:"admin_panel_settings"}

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
