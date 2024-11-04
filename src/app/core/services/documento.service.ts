// src/app/core/services/documento.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Documento } from '../models/documento.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentoService {
  constructor(private apiService: ApiService) {}

  subirDocumento(documento: FormData): Observable<Documento> {
    return this.apiService.post<Documento>('/documentos', documento);
  }

  obtenerDocumentosPorComunidad(comunidadId: string): Observable<Documento[]> {
    return this.apiService.get<Documento[]>(
      `/comunidades/${comunidadId}/documentos`
    );
  }

  descargarDocumento(documentoId: string): Observable<Blob> {
    return this.apiService.get<Blob>(`/documentos/${documentoId}/descargar`);
  }
}
