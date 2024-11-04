// src/app/core/services/votacion.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Votacion } from '../models/votacion.model';

@Injectable({
  providedIn: 'root',
})
export class VotacionService {
  constructor(private apiService: ApiService) {}

  crearVotacion(votacion: Votacion): Observable<Votacion> {
    return this.apiService.post<Votacion>('/votaciones', votacion);
  }

  obtenerVotaciones(): Observable<Votacion[]> {
    return this.apiService.get<Votacion[]>('/votaciones');
  }

  obtenerVotacionPorId(id: string): Observable<Votacion> {
    return this.apiService.get<Votacion>(`/votaciones/${id}`);
  }

  votar(votacionId: string, opcionId: string): Observable<any> {
    return this.apiService.post(`/votaciones/${votacionId}/votar`, {
      opcionId,
    });
  }
}
