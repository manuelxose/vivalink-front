// src/app/core/services/pago.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Pago } from '../models/page.model';

@Injectable({
  providedIn: 'root',
})
export class PagoService {
  constructor(private apiService: ApiService) {}

  realizarPago(pago: Pago): Observable<Pago> {
    return this.apiService.post<Pago>('/pagos', pago);
  }

  obtenerHistorialPagos(): Observable<Pago[]> {
    return this.apiService.get<Pago[]>('/pagos');
  }

  obtenerPagoPorId(id: string): Observable<Pago> {
    return this.apiService.get<Pago>(`/pagos/${id}`);
  }
}
