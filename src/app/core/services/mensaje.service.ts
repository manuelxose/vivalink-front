// src/app/core/services/mensaje.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Mensaje } from '../models/mensaje.model';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  constructor(private apiService: ApiService) {}

  enviarMensaje(mensaje: Mensaje): Observable<Mensaje> {
    return this.apiService.post<Mensaje>('/mensajes', mensaje);
  }

  obtenerMensajes(usuarioId: string): Observable<Mensaje[]> {
    return this.apiService.get<Mensaje[]>(`/usuarios/${usuarioId}/mensajes`);
  }

  obtenerMensajePorId(id: string): Observable<Mensaje> {
    return this.apiService.get<Mensaje>(`/mensajes/${id}`);
  }
}
