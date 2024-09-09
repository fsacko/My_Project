import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantDataService {
  [x: string]: any;
  apiUrl = 'http://localhost:8000/api/';
  dataEtudiant: any;
  dataModules: any;
  moduleID = 0;
  filiereID = 0;
  dataCours: any;


  constructor(private data:DataService,private http:HttpClient) { }
  // Pour la liste des classes de l'etudiant connecter :
  universite_id = this.data.universite_id;
  user:any = this.data.etudiantEmail;

  getEtudiantClasse()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/'+this.user,options)
  }

  // Pour la liste des modules de l'etudiant connecter :
  getEtudiantModule()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/module/'+this.user,options)
  }

  // Pour la liste des cours de l'etudiant connecter :
  getEtudiantCours()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/cours/'+this.user,options)
  }



  // Pour la liste des modules de l'etudiant connecter :
  getEtudiantModuleBy(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/module/'+this.user+'/'+id,options)
  }

  // Pour la liste des cours de l'etudiant connecter :
  getEtudiantCoursBy(id:any)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/cours/'+this.user+'/'+id,options)
  }

}
