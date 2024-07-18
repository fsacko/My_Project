import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

export const authentificationGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isValide()) {
    router.navigate(['/login']);
    return false;
  }
  // router.navigate([route.url]);
  console.log(state.root);
  return true;
};
export const adminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.type!='adminUniversite') {
    router.navigate(['/login']);
    return false;
  }
  // router.navigate([route.url]);
  console.log(state.root);
  return true;
};
export const etudiantGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.type!='etudiant') {
    router.navigate(['/login']);
    return false;
  }
  // router.navigate([route.url]);
  console.log(state.root);
  return true;
};
