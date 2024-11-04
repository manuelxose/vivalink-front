// src/app/core/services/user.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  getUserById(userId: string): Observable<Usuario> {
    return this.apiService.get<Usuario>(`/usuarios/${userId}`);
  }

  updateUser(userId: string, data: any): Observable<Usuario> {
    return this.apiService.put<Usuario>(`/usuarios/${userId}`, data);
  }
}
