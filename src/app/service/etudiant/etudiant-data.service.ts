import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EtudiantDataService {
  apiUrl = 'http://localhost:8000/api/';
  dataEtudiant: any;
  dataModules: any;
  dataCours: any;


  constructor(private data:DataService,private http:HttpClient) { }
  // Pour la liste des classes de l'etudiant connecter :
  universite_id = this.data.universite_id;
  user = this.data.etudiantEmail;

  getEtudiantClasse()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.get<any>(this.apiUrl+'etudiant/'+this.user,options)
  }
}
