import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './GestionEtudiant/etudiant/etudiant.component';
import { EtudiantCreateComponent } from './GestionEtudiant/etudiant-create/etudiant-create.component';
import { EtudiantListeComponent } from './GestionEtudiant/etudiant-liste/etudiant-liste.component';
import { EtudiantDetailComponent } from './GestionEtudiant/etudiant-detail/etudiant-detail.component';
import { ClasseComponent } from './GestionFiliere/classe/classe.component';
import { ClasseEtudiantComponent } from './GestionFiliere/classe-etudiant/classe-etudiant.component';
import { ClasseCoursComponent } from './GestionFiliere/classe-cours/classe-cours.component';
import { ClasseQCMComponent } from './GestionFiliere/classe-qcm/classe-qcm.component';
import { DepartementComponent } from './GestionAdministration/departement/departement.component';
import { ProfesseurComponent } from './GestionAdministration/professeur/professeur.component';
import { DirectionComponent } from './GestionAdministration/direction/direction.component';
import { StatistiqueComponent } from './Gestion/statistique/statistique.component';
import { AccueilComponent } from './Main/accueil/accueil.component';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EtudiantEditComponent } from './GestionEtudiant/etudiant-edit/etudiant-edit.component';
import { AccueilGestionComponent } from './Gestion/accueil-gestion/accueil-gestion.component';
import { ClasseListeComponent } from './GestionFiliere/classe-liste/classe-liste.component';
import { ClasseCreateComponent } from './GestionFiliere/classe-create/classe-create.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantFiliereComponent } from './GestionEtudiant/etudiant-filiere/etudiant-filiere.component';
import { DashbordComponent } from './Main/dashbord/dashbord.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { CreateCoursComponent } from './GestionFiliere/cours/create-cours/create-cours.component';
import { EditeCoursComponent } from './GestionFiliere/cours/edite-cours/edite-cours.component';
import { ListeCoursComponent } from './GestionFiliere/cours/liste-cours/liste-cours.component';
import { ClasseAccueilComponent } from './GestionFiliere/classe-accueil/classe-accueil.component';
import { ModuleComponent } from './GestionModule/module/module.component';
import { ModuleCreateComponent } from './GestionModule/module-create/module-create.component';
import { ModuleListeComponent } from './GestionModule/module-liste/module-liste.component';
import { ClasseDetailsComponent } from './GestionFiliere/classe-details/classe-details.component';
import { DetailComponent } from './GestionFiliere/detail/detail.component';
import { AccueilEtudiantComponent } from './PageEtudiants/accueil-etudiant/accueil-etudiant.component';
import { CourEtudiantComponent } from './PageEtudiants/cour-etudiant/cour-etudiant.component';
import { ModuleEtudiantComponent } from './PageEtudiants/module-etudiant/module-etudiant.component';
import { MainComponent } from './PageEtudiants/main/main.component';
import { DataTablesModule } from 'angular-datatables';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SimplebarAngularModule } from 'simplebar-angular';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        EtudiantComponent,
        EtudiantCreateComponent,
        EtudiantListeComponent,
        EtudiantDetailComponent,
        ClasseComponent,
        ClasseEtudiantComponent,
        ClasseCoursComponent,
        ClasseQCMComponent,
        DepartementComponent,
        ProfesseurComponent,
        DirectionComponent,
        StatistiqueComponent,
        AccueilComponent,
        EtudiantEditComponent,
        AccueilGestionComponent,
        ClasseListeComponent,
        ClasseCreateComponent,
        LoginComponent,
        EtudiantFiliereComponent,
        DashbordComponent,
        ProfilComponent,
        CreateCoursComponent,
        EditeCoursComponent,
        ListeCoursComponent,
        ClasseAccueilComponent,
        ModuleComponent,
        ModuleCreateComponent,
        ModuleListeComponent,
        ClasseDetailsComponent,
        DetailComponent,
        AccueilEtudiantComponent,
        CourEtudiantComponent,
        ModuleEtudiantComponent,
        MainComponent
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterOutlet,
        CKEditorModule,
        DataTablesModule,
        SimplebarAngularModule
    ]
})
export class AppModule {

}
