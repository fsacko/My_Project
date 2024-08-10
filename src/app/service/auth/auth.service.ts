import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../model/Login.model';
import { Observable, of } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8000/api/login';
  apiUrl = 'http://localhost:8000/api';

  userValide: Login | undefined;
  type!:string;
  // options : any;

  constructor(private http:HttpClient)
  {


  }

  login(email:string, password:string,role:string)
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };
    return this.http.post<any>(this.authUrl,{
      email: email,
      password: password,
      role:role
    },options);


  }

  public valideUser (login:Login,type:string):Observable<boolean>
  {
    this.type = type;
    this.userValide = login;
    return of(true);
  }

  public isValide(){

    return this.userValide!=undefined;
  }

  logout()
  {
    const options = {
      headers : new HttpHeaders({Accept: 'application/json','Content-Type': 'application/json'})
    };

    // options.headers.Authorization = 'Bearer ' + localStorage.getItem('access_token');
    // return this.http.get(this.apiUrl + '/token/revoke',options);

  }

}
