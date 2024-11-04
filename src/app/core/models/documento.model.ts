// src/app/shared/models/documento.model.ts

export interface Documento {
  id: string;
  propietarioId: string;
  comunidadId?: string;
  nombreArchivo: string;
  rutaArchivo: string;
  tipoDocumento: TipoDocumento;
  fechaSubida: Date;
}

export type TipoDocumento = 'contrato' | 'factura' | 'acta' | 'otro';
