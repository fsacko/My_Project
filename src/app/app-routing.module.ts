import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { EtudiantComponent } from './GestionEtudiant/etudiant/etudiant.component';
import { DepartementComponent } from './GestionAdministration/departement/departement.component';
import { EtudiantListeComponent } from './GestionEtudiant/etudiant-liste/etudiant-liste.component';
import { EtudiantCreateComponent } from './GestionEtudiant/etudiant-create/etudiant-create.component';
import { EtudiantDetailComponent } from './GestionEtudiant/etudiant-detail/etudiant-detail.component';
import { EtudiantEditComponent } from './GestionEtudiant/etudiant-edit/etudiant-edit.component';
import { DirectionComponent } from './GestionAdministration/direction/direction.component';
import { ClasseComponent } from './GestionFiliere/classe/classe.component';
import { StatistiqueComponent } from './Gestion/statistique/statistique.component';
import { AccueilGestionComponent } from './Gestion/accueil-gestion/accueil-gestion.component';
import { AideComponent } from './Main/aide/aide.component';
import { ContactComponent } from './Main/contact/contact.component';
import { AproposComponent } from './Main/apropos/apropos.component';
import { ProfesseurComponent } from './GestionAdministration/professeur/professeur.component';
import { ClasseCoursComponent } from './GestionFiliere/classe-cours/classe-cours.component';
import { ClasseListeComponent } from './GestionFiliere/classe-liste/classe-liste.component';
import { ClasseCreateComponent } from './GestionFiliere/classe-create/classe-create.component';
import { LoginComponent } from './login/login.component';
import { EtudiantFiliereComponent } from './GestionEtudiant/etudiant-filiere/etudiant-filiere.component';
import { AccueilComponent } from './Main/accueil/accueil.component';

const routes: Routes = [
    // {path : '', component : LoginComponent},
    {path : 'login', component : LoginComponent},
    {path: '', component:AccueilComponent, children: [
      {path : 'direction', component : DirectionComponent},

      {path : 'filiere', component : ClasseComponent},
      {path : 'filiere/modules', component : ClasseCoursComponent},
      {path : 'filiere/liste', component :ClasseListeComponent },
      {path : 'filiere/new', component :ClasseCreateComponent },


      {path: 'departement', component:DepartementComponent},
      {path: 'professeur', component : ProfesseurComponent},

      // Pour les routes qui ne concernent que les Etudiants :
      {path:  'etudiant', component:EtudiantComponent,children:[
        {path : '', component : EtudiantListeComponent},
        {path : 'liste', component : EtudiantListeComponent},
        {path : 'filiere', component : EtudiantFiliereComponent},
        {path : 'new', component : EtudiantCreateComponent}
        // {path : 'details/:id', component : EtudiantDetailComponent},
        // {path : 'edit/:id', component : EtudiantEditComponent}

      ]},
      // Fin Pour les routes des etudiants.

      {path : 'statistique', component : StatistiqueComponent},

      {path : 'gestion', component : AccueilGestionComponent},
      {path : 'aide', component :AideComponent},
      {path : 'contact', component : ContactComponent},
      {path : 'apropos', component : AproposComponent},
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
