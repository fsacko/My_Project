import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';
import { DataService } from '../../service/data.service';
import SimpleBar from 'simplebar';
import { EtudiantDataService } from '../../service/etudiant/etudiant-data.service';

export const authentificationGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isValide()) {
    localStorage.setItem('redirectUrl', state.url); // Sauvegarder la route actuelle
    router.navigate(['/login']);
    return false;
  }else{

    return true && !!localStorage.getItem('authToken');
  }
};
export const adminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const Data = inject(DataService);
  const token = localStorage.getItem("authToken");
  if (auth.type!='adminUniversite' && token == undefined) {
    localStorage.setItem('redirectUrl', state.url); // Sauvegarder la route actuelle
    router.navigate(['/login']);
    return false;
  }else{
    const universite_id = localStorage.getItem("users");
    const users = auth.userValide;
    Data.universite_id = universite_id ;
    Data.getUniversite().subscribe();
    Data.users = localStorage.getItem('name');
    Data.getAnnee().subscribe(annee => {Data.annee_scolaire = annee});
    // Data.getUser(users);
    // auth.initialize();

    return true ;
  }
};
export const etudiantGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService);
  const data = inject(DataService);
  const EtData = inject(EtudiantDataService);
  const router = inject(Router);
  const token = localStorage.getItem("authToken");
  if (auth.type!='etudiant' && token == undefined) {
    localStorage.setItem('redirectUrlE', state.url); // Sauvegarder la route actuelle
    router.navigate(['/login']);
    return false;
  }else{
    const email = localStorage.getItem('email');
    data.etudiantEmail = email;
    EtData.user = email;

    return true;
  }
};

