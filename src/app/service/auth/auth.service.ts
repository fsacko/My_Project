import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../model/Login.model';
import { Observable, of } from 'rxjs';
import { Token } from '@angular/compiler';
import { DataService } from '../data.service';
import SimpleBar from 'simplebar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:8000/api/login';
  apiUrl = 'http://localhost:8000/api';

  userValide: Login | undefined;
  type!:string;
  universite : any;
  universite_id:number|undefined;
  users: any;
  // options : any;

  constructor(private http:HttpClient,private data:DataService)
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

  public valideUser (login:Login,type:string,universites:any,users:any):Observable<boolean>
  {
    this.type = type;
    this.userValide = login;
    // const universite_id = universites;
    // this.data.universite_id = universite_id;
    // this.data.getUniversite().subscribe();
    // const user = users;
    this.data.getUser(users);
    return of(true);
  }

  public isValide(){

    return this.userValide!=undefined;
  }

  public logout(): Observable <boolean> {
    this.userValide = undefined;
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("users");
    return of(true);

  }


 initialize()
{
  this.initializeSimplebar();
  this.initializeSidebarCollapse();
}

 initializeSimplebar()
{
  const simplebarElement:HTMLCollectionOf<Element> = document.getElementsByClassName("js-simplebar");

  if(simplebarElement){
    const simpleNav = simplebarElement[0] as HTMLElement
    const simplebarInstance = new SimpleBar(simpleNav);

    /* Recalculate simplebar on sidebar dropdown toggle */
    const sidebarDropdowns = document.querySelectorAll(".js-sidebar [data-bs-parent]");

    sidebarDropdowns.forEach(link => {
      link.addEventListener("shown.bs.collapse", () => {
        simplebarInstance.recalculate();
      });
      link.addEventListener("hidden.bs.collapse", () => {
        simplebarInstance.recalculate();
      });
    });
  }
}

 initializeSidebarCollapse()
{
  const sidebarElement:HTMLCollectionOf<Element> = document.getElementsByClassName("js-sidebar");
  const sidebarToggleElement:HTMLCollectionOf<Element>  = document.getElementsByClassName("js-sidebar-toggle");

  if(sidebarElement && sidebarToggleElement) {
    const sideBto = sidebarToggleElement[0] as HTMLElement;
    const sideEl = sidebarElement[0] as HTMLElement;
    sideBto.addEventListener("click", () => {
      sideEl.classList.toggle("collapsed");

      sideEl.addEventListener("transitionend", () => {
        window.dispatchEvent(new Event("resize"));
      });
    });
  }
}

}
