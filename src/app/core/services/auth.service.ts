// src/app/core/services/auth.service.ts

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { isPlatformBrowser } from '@angular/common';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<Usuario | null>;
  public currentUser: Observable<Usuario | null>;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    let user: Usuario | null = null;
    if (isPlatformBrowser(this.platformId)) {
      // En el navegador, obtener el usuario de las cookies
      const userJson = this.cookieService.get('currentUser');
      user = userJson ? JSON.parse(userJson) : null;
    }
    this.currentUserSubject = new BehaviorSubject<Usuario | null>(user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<Usuario> {
    return this.http.post<any>('/api/auth/login', { email, password }).pipe(
      map((user) => {
        if (user && user.token) {
          // Guardar detalles de usuario y token JWT en cookies
          if (isPlatformBrowser(this.platformId)) {
            this.cookieService.set('currentUser', JSON.stringify(user));
            this.cookieService.set('token', user.token);
          }
          this.currentUserSubject.next(user);
        }
        return user;
      })
    );
  }

  logout(): void {
    // Eliminar usuario de las cookies y establecer currentUser a null
    if (isPlatformBrowser(this.platformId)) {
      this.cookieService.delete('currentUser');
      this.cookieService.delete('token');
    }
    this.currentUserSubject.next(null);
  }

  register(user: any): Observable<any> {
    return this.http.post('/api/auth/register', user);
  }

  isAuthenticated(): boolean {
    return !!this.currentUserValue;
  }

  hasRole(roles: string[]): boolean {
    return this.currentUserValue
      ? roles.includes(this.currentUserValue.rol)
      : false;
  }
}
