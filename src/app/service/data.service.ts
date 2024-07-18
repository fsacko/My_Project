import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiants } from '../CLASS/etudiant/etudiants';
import { Classe } from '../CLASS/classe/classe';
import { map, Observable } from 'rxjs';
import { Module } from '../CLASS/module';
import { Cours } from '../model/Cours.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  universites: any;
  session_success:string|undefined;

  constructor(private httpClient:HttpClient) {
  }


// *******************************POUR L'UNIVERSITE *********************************
  universite_id:number | undefined;
  universite_nom:string | undefined;
  users: any | undefined;
  annee_scolaire: any;
  etudiantEmail!:string;

  getUser(value:any){
    return this.users = value; //Pour les informations de l'utilisateur connecter
  }

  getUniversite(){
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/universite/'+this.universite_id,options);
  }

  getAnnee(){
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/anneeScolaire/',options);
  }

// *******************************POUR LES ETUDIANTS*********************************
    // La liste des etudiants
    getEtudiantData()
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeEtudiants/'+this.universite_id,options);
    }
    // L'insertion d'un nouveau Etudiant
    insertEtudiantData(etudiant:Etudiants)
    {

      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/insertEtudiants',etudiant,options);
    }
    // Mise à jour d'un Etudiant
    updateEtudiant(id:any,data:Etudiants)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.put<any>('http://127.0.0.1:8000/api/etudiants/'+id,data,options);
    }
    // Suppression d'un Etudiant
    deleteEtudiant(id:any)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.delete('http://127.0.0.1:8000/api/etudiants/'+id,options);
    }

// ***********************************POUR LES FILIERES******************************

    filiereListe: any; //Pour la liste des filiere en fonction de l'université.
    detailFiliere: any; //Pour Les modules de la filiere choisie en  fonction de l'université.

    getClasseData()
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeClasse/'+this.universite_id,options);
    }

    insertClasse(filiere: Classe)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.post<any>('http://127.0.0.1:8000/api/classe',filiere,options);
    }

    showClasse()
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/showClasse/'+this.universite_id,options);
    }

    getClasseById(id:any)
    {

      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/getModuleByFiliereId/'+this.universite_id+'/'+id,options);
    }


// ***********************************POUR LES Modules******************************
  getModuleData()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeModule/'+this.universite_id,options);
  }

  insertModule(module: Module) {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/module',module,options);

  }
// Pour recuperer Modules par filieres
  getModule(filiere_id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/moduleByfiliere/'+this.universite_id+'/'+filiere_id,options);
  }


// ***********************************POUR LES COURS******************************
  module_id:any;
  filiere_id:any;
  moduleData:any;
  classeData: any;

  getCourData(filiere_id:any,module_id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeCours/'+filiere_id+'/'+module_id,options);
  }
  // Pour l'insertion des cours
  insertcour(fichier: File,titre:string,sous_titre:string,contenu:string, filiere_id:any,module_id:any) {

    const formData: FormData = new FormData();
    formData.append('fichier', fichier);
    formData.append('titre', titre);
    formData.append('sous_titre', sous_titre);
    formData.append('contenu', contenu);
    formData.append('filiere_id', filiere_id);
    formData.append('module_id', module_id);

    return this.httpClient.post<any>('http://127.0.0.1:8000/api/cours',formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            const progress = Math.round(100 * event.loaded / event.total!);
            return { status: 'progress', message: progress };
          case HttpEventType.Response:
            return event.body;
          default:
            return `Unhandled event: ${event.type}`;
        }
      })
    );

  }

}
