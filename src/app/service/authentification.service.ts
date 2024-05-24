import { Injectable } from '@angular/core';
import { Login } from '../model/Login.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users: Login[] = [];
  userValide! : Login | undefined;

  constructor() {
    // this.users.push({
    //   email: "colonel.diallo19@gmail.com", password: "1234", roles: ["admin"],
    //   userId: '1'
    // });
  }

  // Verification de l'utilisateur :
  public login(email:string, password:string):Observable<Login>
  {
    let user = this.users.find(u => u.email === email);
    if (!user) return throwError(()=>new Error("Utilisateur introuvable"));
    if (user.password != password){
      return throwError(()=>new Error("mot de passe Incorrectes"));
    }
    return of(user);
  }

  // Enregistrement apres une authentification dans le localstorage

  public valideUser (login:Login):Observable<boolean>
  {
    this.userValide = login;
    localStorage.setItem('authUser', JSON.stringify({email: this.userValide.email,jwt:"JWT_TOKEN"}));
    return of(true);
  }

  // Pour verification de role :

  // public hasVerifierRole(role:string):boolean {
  //   return this.userValide!.roles.includes(role);
  // }

  // Verification si l'utilisateur est Authentier :
  public isValide(){
    return this.userValide!=undefined;

  }

  // Pour la deconnexion d'un utilisateur :
  public logout(): Observable <boolean> {
    this.userValide = undefined;
    localStorage.removeItem("authUser");
    return of(true);
  }
}
