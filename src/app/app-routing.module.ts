import { NgModule } from '@angular/core';
import { RouterModule,  Routes } from '@angular/router';
import { EtudiantComponent } from './GestionEtudiant/etudiant/etudiant.component';
import { DepartementComponent } from './GestionAdministration/departement/departement.component';
import { EtudiantCreateComponent } from './GestionEtudiant/etudiant-create/etudiant-create.component';
import { DirectionComponent } from './GestionAdministration/direction/direction.component';
import { ClasseComponent } from './GestionFiliere/classe/classe.component';
import { StatistiqueComponent } from './Gestion/statistique/statistique.component';
import { ProfesseurComponent } from './GestionAdministration/professeur/professeur.component';
import { ClasseCoursComponent } from './GestionFiliere/classe-cours/classe-cours.component';
import { ClasseListeComponent } from './GestionFiliere/classe-liste/classe-liste.component';
import { ClasseCreateComponent } from './GestionFiliere/classe-create/classe-create.component';
import { LoginComponent } from './login/login.component';
import { EtudiantFiliereComponent } from './GestionEtudiant/etudiant-filiere/etudiant-filiere.component';
import { AccueilComponent } from './Main/accueil/accueil.component';
import { DashbordComponent } from './Main/dashbord/dashbord.component';
import { ListeCoursComponent } from './GestionFiliere/cours/liste-cours/liste-cours.component';
import { EditeCoursComponent } from './GestionFiliere/cours/edite-cours/edite-cours.component';
import { CreateCoursComponent } from './GestionFiliere/cours/create-cours/create-cours.component';
import { ClasseAccueilComponent } from './GestionFiliere/classe-accueil/classe-accueil.component';
import { adminGuard, authentificationGuard, etudiantGuard } from './guards/auth/authentification.guard';
import { ModuleComponent } from './GestionModule/module/module.component';
import { ModuleListeComponent } from './GestionModule/module-liste/module-liste.component';
import { ClasseDetailsComponent } from './GestionFiliere/classe-details/classe-details.component';
import { DetailComponent } from './GestionFiliere/detail/detail.component';
import { ModuleCreateComponent } from './GestionModule/module-create/module-create.component';
import { AccueilEtudiantComponent } from './PageEtudiants/accueil-etudiant/accueil-etudiant.component';
import { CourEtudiantComponent } from './PageEtudiants/cour-etudiant/cour-etudiant.component';
import { ModuleEtudiantComponent } from './PageEtudiants/module-etudiant/module-etudiant.component';
import { MainComponent } from './PageEtudiants/main/main.component';
import { EtudiantEditComponent } from './GestionEtudiant/etudiant-edit/etudiant-edit.component';

const routes: Routes = [
    // {path : '', component : LoginComponent},
    {path : 'login',component : LoginComponent},


    // Pour la partie Administrateur

    {path: '', component:AccueilComponent,canActivate:[adminGuard], children: [
      {path: '',component:DashbordComponent},
      {path : 'direction', component : DirectionComponent},
      {path : 'gestion', component : ClasseComponent},

      {path : 'gestion/Filieres', component : ClasseDetailsComponent , children:[
        {path : '', component :ClasseAccueilComponent },
        {path : 'new', component :ClasseCreateComponent },
        {path : 'voir_plus', component :DetailComponent },
        {path : 'newModule', component :ModuleCreateComponent },
        {path : 'liste',component :ClasseListeComponent}
      ]},
      {path : 'gestion/Cours', component : ClasseCoursComponent, children:[
        {path: '', component: ListeCoursComponent},
        {path: 'liste', component: ListeCoursComponent},
        {path: 'edit', component: EditeCoursComponent },
        {path: 'new', component: CreateCoursComponent }
      ]},
      {path : 'gestion/Modules', component : ModuleComponent, children:[
        {path: '', component: ModuleListeComponent},
        {path: 'liste', component: ModuleListeComponent},
        {path: 'new', component: ModuleCreateComponent }
      ]},
      // Pour les routes qui ne concernent que les Etudiants :
      {path:  'gestion/Etudiants', component:EtudiantComponent,children:[
        {path : '', component : EtudiantFiliereComponent},
        {path : 'liste', component : EtudiantFiliereComponent},
        {path : 'filiere', component : EtudiantFiliereComponent},
        {path : 'new', component : EtudiantCreateComponent},
        {path : 'new/matricule', component : EtudiantEditComponent}
        // {path : 'details/:id', component : EtudiantDetailComponent},
        // {path : 'edit/:id', component : EtudiantEditComponent}

      ]},



      {path: 'departement', component:DepartementComponent},
      {path: 'professeur', component : ProfesseurComponent},

      // Fin Pour les routes des etudiants.

      {path : 'statistique', component : StatistiqueComponent},
    ]},


    // Pour la partie des Etudiants :
    {path: 'etudiant',component:MainComponent,canActivate:[etudiantGuard],children:[
      {path :'',component:AccueilEtudiantComponent},
      {path :'module/cours',component:CourEtudiantComponent},
      {path:'module',component:ModuleEtudiantComponent}
    ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
