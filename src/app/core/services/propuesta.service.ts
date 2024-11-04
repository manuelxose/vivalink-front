// src/app/core/services/propuesta.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Propuesta } from '../models/propuesta.mdoel';

@Injectable({
  providedIn: 'root',
})
export class PropuestaService {
  constructor(private apiService: ApiService) {}

  enviarPropuesta(propuesta: Propuesta): Observable<Propuesta> {
    return this.apiService.post<Propuesta>('/propuestas', propuesta);
  }

  obtenerPropuestasPorSolicitud(solicitudId: string): Observable<Propuesta[]> {
    return this.apiService.get<Propuesta[]>(
      `/solicitudes/${solicitudId}/propuestas`
    );
  }

  obtenerPropuestaPorId(id: string): Observable<Propuesta> {
    return this.apiService.get<Propuesta>(`/propuestas/${id}`);
  }
}
