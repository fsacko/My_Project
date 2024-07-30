import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'FrontEnd';

  ngOnInit(): void {
    // Initialisation des composants JavaScript AdminKit
  }

  actions : Array<any> = [
    {name :'accueils',title :"Accueil", "route":"accueil", "icon":"home"},
    {name :'administrations',title :"Departement", "route":"departement", "icon":"school"},
    {name :'etudiants',title :"Etudiants", "route":"etudiant", "icon":"peop"},
    {name :'enseignants',title:"Enseignants", "route":"professeur", "icon":"peop"},
    {name :'',title :"Filieres", "route":"filiere", "icon":"class"},
    {name :'administrations',title:"Direction", "route":"direction", "icon":"admin_panel_settings"},
    {name :'gestions',title :"Gestion", "route":"gestion", "icon":"settings"},
    {name :'statistiques',title:"Statistiques", "route":"statistique", "icon":"bar_chart"},
    {name :'aides',title :"Aide", "route":"aide", "icon":"help"},
    {name :'contacts',title:"Contact", "route":"contact", "icon":"contact_support"},
    {name :'apropos',title :"A propos", "route":"apropos", "icon":"info"},

  ];
  options : Array<any> =[
    {name : 'etudiants', contenu: [
      {title :"Cours", "route":"cours", "icon":"book"},
      {title:"Emplois du temps", "route":"emplois", "icon":"schedule"},
      {title :"Notes", "route":"notes", "icon":"assignment"},
      {title:"Absences", "route":"absences", "icon":"event_busy"},
      {title :"Examens", "route":"examens", "icon":"assignment_turned_in"},
      {title:"Resultats", "route":"resultats", "icon":"assignment_returned"},
      {title :"Bibliotheque", "route":"bibliotheque", "icon":"library_books"},
      {title:"Evenements", "route":"evenements", "icon":"event"},
      {title :"Forum", "route":"forum", "icon":"forum"},
      {title :"Galerie", "route":"galerie", "icon":"photo_album"},
    ]},
    {name : 'administrations', contenu: [
      {title :"Gestion des etudiants", "route":"gestionEtudiants", "icon":"people"},
      {title:"Gestion des enseignants", "route":"gestionEnseignants", "icon":"people"},
      {title:"Gestion des emplois du temps", "route":"gestionEmplois", "icon":"schedule"},
      {title :"Gestion des notes", "route":"gestionNotes", "icon":"assignment"},
      {title:"Gestion des absences", "route":"gestionAbsences", "icon":"event_busy"},
      {title:"Gestion des resultats", "route":"gestionResultats", "icon":"assignment_returned"},

    ]},
    {name : 'gestions', contenu: [
      {title :"Gestion des Direction", "route":"gestionEtudiants", "icon":"people"},
      {title:"Gestion des Assistants", "route":"gestionEnseignants", "icon":"people"},
      {title :"Gestion des filieres", "route":"gestionFilieres", "icon":"class"},
      {title:"Gestion des departements", "route":"gestionDepartements", "icon":"school"},
      {title:"Gestion des emplois du temps", "route":"gestionEmplois", "icon":"schedule"},
      {title:"Gestion des Diplomes", "route":"gestionResultats", "icon":"assignment_returned"},
    ]},
    {name : 'statistiques', contenu: [
      {title :"Statistiques des etudiants", "route":"statistiquesEtudiants", "icon":"people"},
      {title:"Statistiques des enseignants", "route":"statistiquesEnseignants", "icon":"people"},
      {title :"Statistiques des filieres", "route":"statistiquesFilieres", "icon":"class"},
      {title:"Statistiques des departements", "route":"statistiquesDepartements", "icon":"school"},
      {title:"Statistiques des emplois du temps", "route":"statistiquesEmplois", "icon":"schedule"},
      {title :"Statistiques des notes", "route":"statistiquesNotes", "icon":"assignment"},
      {title:"Statistiques des absences", "route":"statistiquesAbsences", "icon":"event_busy"},
      {title :"Statistiques des examens", "route":"statistiquesExamens", "icon":"assignment_turned_in"},
      {title:"Statistiques des resultats", "route":"statistiquesResultats", "icon":"assignment_returned"},
    ]},
    {name : 'aides', contenu: [
      {title :"Aide en ligne", "route":"aideEnLigne", "icon":"help"},
      {title:"Foire aux questions", "route":"faq", "icon":"forum"},
      {title :"Support technique", "route":"supportTechnique", "icon":"contact_support"},
      {title:"Contactez-nous", "route":"contactezNous", "icon":"contact_support"},
    ]},
    {name : 'enseignants', contenu: [
      {title:"Cours", "route":"cours", "icon":"book"},
      {title :"Emplois du temps", "route":"emplois", "icon":"schedule"},
      {title:"Notes", "route":"notes", "icon":"assignment"},
      {title:"Favorite", "route":"favorite", "icon":"favorite"},
    ]},
    {name : 'accueils', contenu: [
      {title:"Etudiants", "route":"etudiant", "icon":"book"},
      {title :"Cours", "route":"cours", "icon":"schedule"},
      {title:"Direction", "route":"/etudiant/{id}/notes", "icon":"assignment"},
      {title:"Gestion", "route":"favorite", "icon":"favorite"},
    ]}

  ];

  currentAction :any;
  elementsName : any;
  constructor(){}

  setcurrentAction(actions: any, element: any) {
    this.currentAction = actions;
    for (let i  = 0; i < this.options.length; i++) {
      var elements = this.options[i];
      if (elements.name == element) {
        return this.elementsName = elements.contenu;
      }
      else{
        this.elementsName = [];
      }
    }
  }
}
