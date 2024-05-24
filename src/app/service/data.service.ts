import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiants } from '../CLASS/etudiant/etudiants';
import { Classe } from '../CLASS/classe/classe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
// *******************************POUR LES ETUDIANTS*********************************
    // La liste des etudiants
    getEtudiantData()
    {
      return this.httpClient.get('http://127.0.0.1:8000/api/etudiants');
    }
    // L'insertion d'un nouveau Etudiant
    insertEtudiantData(etudiant:Etudiants)
    {
      return this.httpClient.post('http://127.0.0.1:8000/api/etudiants',etudiant);
    }
    // Mise à jour d'un Etudiant
    updateEtudiant(id:any,data:Etudiants)
    {
      return this.httpClient.put('http://127.0.0.1:8000/api/etudiants/'+id,data);
    }
    // Suppression d'un Etudiant
    deleteEtudiant(id:any)
    {
      return this.httpClient.delete('http://127.0.0.1:8000/api/etudiants/'+id);
    }

// ***********************************POUR LES FILIERES******************************
    getClasseData()
    {
      return this.httpClient.get('http://127.0.0.1:8000/api/classe');
    }

    insertClasse(filiere: Classe) {
      return this.httpClient.post('http://127.0.0.1:8000/api/classe',filiere);
    }
}
