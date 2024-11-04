// src/app/core/guards/admin.guard.ts

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = this.authService.currentUserValue;
    if (currentUser && currentUser.rol === 'admin') {
      // Usuario es administrador, permitir acceso
      return true;
    }

    // Usuario no autorizado, redirigir o mostrar mensaje
    this.router.navigate(['/']);
    return false;
  }
}
