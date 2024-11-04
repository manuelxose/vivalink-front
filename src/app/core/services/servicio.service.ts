// src/app/core/services/servicio.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Servicio } from '../models/servicio.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private apiService: ApiService) {}

  crearServicio(servicio: Servicio): Observable<Servicio> {
    return this.apiService.post<Servicio>('/servicios', servicio);
  }

  obtenerServiciosPorProveedor(proveedorId: string): Observable<Servicio[]> {
    return this.apiService.get<Servicio[]>(
      `/proveedores/${proveedorId}/servicios`
    );
  }

  obtenerServicioPorId(id: string): Observable<Servicio> {
    return this.apiService.get<Servicio>(`/servicios/${id}`);
  }
}
