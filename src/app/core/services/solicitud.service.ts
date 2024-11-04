// src/app/core/services/solicitud.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { SolicitudDeServicio } from '../models/solicitud-de-servicio.model';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private apiService: ApiService) {}

  crearSolicitud(
    solicitud: SolicitudDeServicio
  ): Observable<SolicitudDeServicio> {
    return this.apiService.post<SolicitudDeServicio>('/solicitudes', solicitud);
  }

  obtenerSolicitudes(): Observable<SolicitudDeServicio[]> {
    return this.apiService.get<SolicitudDeServicio[]>('/solicitudes');
  }

  obtenerSolicitudPorId(id: string): Observable<SolicitudDeServicio> {
    return this.apiService.get<SolicitudDeServicio>(`/solicitudes/${id}`);
  }
}
