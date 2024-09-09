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
  // universites: any;
  session_success:string|undefined;
  dataEtudiants: any;

  constructor(private httpClient:HttpClient) {
  }



// *******************************POUR L'UNIVERSITE *********************************
  universite_id:any = localStorage.getItem("users");
  universite_nom:string | undefined;
  users: any = localStorage.getItem('name');
  annee_scolaire: any;
  etudiantEmail:any = localStorage.getItem('email');

  getUser(value:any){
    return this.users = value; //Pour les informations de l'utilisateur connecter
  }

  getData(res:any):Observable<any>
  {
    const universite_id = localStorage.getItem('users');
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
  return this.httpClient.get<any>(`http://127.0.0.1:8000/api/${res}/`+universite_id);
  }


  getUniversite():Observable<any>
  {
    const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/universite/'+universite_id,options);
  }

  getAnnee():Observable<any>
  {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/anneeScolaire/',options);
  }

// *******************************POUR LES ETUDIANTS*********************************
    // La liste des etudiants
    getEtudiantData():Observable<any>
    {
      const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get('http://127.0.0.1:8000/api/listeEtudiants/'+universite_id,options);
    }

    // Pour recuperer les informations d'un etudiant:
    getEtudiantDataById(id:any,filiere_id:any):Observable<any>
    {
      const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/etudiantById/'+filiere_id+'/'+id,options);
    }

    // Pour recuperer les informations des etudiants d'une filiere:
    getEtudiantDataByFiliere(filiere_id:any):Observable<any>
    {
      const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/etudiantByFiliere/'+filiere_id+'/'+universite_id,options);
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
    deleteEtudiant(id:any,filiere_id:any)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/etudiants/'+id+'/'+filiere_id,options);
    }

// ***********************************POUR LES FILIERES******************************

    filiereListe: any; //Pour la liste des filiere en fonction de l'université.
    detailFiliere: any; //Pour Les modules de la filiere choisie en  fonction de l'université.

    getClasseData()
    {
      const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeClasse/'+universite_id,options);
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
      const universite_id = localStorage.getItem('users');
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/showClasse/'+universite_id,options);
    }

    getClasseById(id:any)
    {
      const universite_id = localStorage.getItem('users');

      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/getModuleByFiliereId/'+universite_id+'/'+id,options);
    }
    // Mise à jour de Classe
    updateFiliere(id:any,data:Classe)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.put<any>('http://127.0.0.1:8000/api/classe/'+id,data,options);
    }
    // Suppression d'une Classe
    deleteFiliere(id:any)
    {
      const options = {
        headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
      };
      return this.httpClient.get<any>('http://127.0.0.1:8000/api/classes/'+id,options);
    }



// ***********************************POUR LES Modules******************************
  getModuleData()
  {
    const universite_id = localStorage.getItem('users');
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/listeModule/'+universite_id,options);
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
    const universite_id = localStorage.getItem('users');
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/moduleByfiliere/'+universite_id+'/'+filiere_id,options);
  }

  updateModule(id:any,module:Module)
  {
    const universite_id = localStorage.getItem('users');
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.put<any>('http://127.0.0.1:8000/api/moduleUpdate/'+id,module,options)
  }

  deleteModule(id:any)
  {

    const universite_id = localStorage.getItem('users');
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/moduleDelete/'+id,options);
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
  insertcour(fichier: File,titre:string,sous_titre:string,contenu:any, filiere_id:any,module_id:any) {

    const formData: FormData = new FormData();
    formData.append('fichier', fichier,fichier.name);
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


  // Pour l'insertion des cours
  insertCourContenu(titre:string,sous_titre:string,contenu:any, filiere_id:any,module_id:any) {

    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    const formData: FormData = new FormData();
    formData.append('titre', titre);
    formData.append('sous_titre', sous_titre);
    formData.append('contenu', contenu);
    formData.append('filiere_id', filiere_id);
    formData.append('module_id', module_id);
    return this.httpClient.post<any>('http://127.0.0.1:8000/api/cours',formData,options);
  }
  // Active Cours :
  activeCour(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/activeCours/'+id,options);
  }

  // Desactive Cours :
  desactiveCour(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/desactiveCours/'+id,options);
  }
  // Cours By  ID :
  courById(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/cours/'+id,options);
  }
  // Mise à jour d'un Cour
  updateCour(id:any,data:Cours)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.put<any>('http://127.0.0.1:8000/api/cours/'+id,data,options);
  }
  // Suppression d'un Cour
  deleteCour(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.httpClient.get<any>('http://127.0.0.1:8000/api/coursD/'+id,options);
  }

}
