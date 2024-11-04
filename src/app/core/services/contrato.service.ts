// src/app/core/services/contrato.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Contrato } from '../models/contrato.model';

@Injectable({
  providedIn: 'root',
})
export class ContratoService {
  constructor(private apiService: ApiService) {}

  crearContrato(contrato: Contrato): Observable<Contrato> {
    return this.apiService.post<Contrato>('/contratos', contrato);
  }

  obtenerContratos(): Observable<Contrato[]> {
    return this.apiService.get<Contrato[]>('/contratos');
  }

  obtenerContratoPorId(id: string): Observable<Contrato> {
    return this.apiService.get<Contrato>(`/contratos/${id}`);
  }
}
