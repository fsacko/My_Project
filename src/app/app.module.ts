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
import { OptionComponent } from './Main/option/option.component';
import { ContenuFooterComponent } from './Main/contenu-footer/contenu-footer.component';
import { ContenuHeaderComponent } from './Main/contenu-header/contenu-header.component';
import { AccueilComponent } from './Main/accueil/accueil.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { EtudiantEditComponent } from './GestionEtudiant/etudiant-edit/etudiant-edit.component';
import { AccueilGestionComponent } from './Gestion/accueil-gestion/accueil-gestion.component';
import { ContactComponent } from './Main/contact/contact.component';
import { AproposComponent } from './Main/apropos/apropos.component';
import { AideComponent } from './Main/aide/aide.component';
import { ClasseListeComponent } from './GestionFiliere/classe-liste/classe-liste.component';
import { ClasseCreateComponent } from './GestionFiliere/classe-create/classe-create.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EtudiantFiliereComponent } from './GestionEtudiant/etudiant-filiere/etudiant-filiere.component';

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
        OptionComponent,
        ContenuFooterComponent,
        ContenuHeaderComponent,
        AccueilComponent,
        EtudiantEditComponent,
        AccueilGestionComponent,
        ContactComponent,
        AproposComponent,
        AideComponent,
        ClasseListeComponent,
        ClasseCreateComponent,
        LoginComponent,
        EtudiantFiliereComponent
    ],
    providers: [
        provideClientHydration(),
        provideHttpClient(withFetch())
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterOutlet
    ]
})
export class AppModule {

}
