// src/app/shared/models/contrato.model.ts

export interface Contrato {
  id: string;
  comunidadId: string;
  proveedorId: string;
  solicitudId: string;
  propuestaId: string;
  fechaInicio: Date;
  fechaFin: Date;
  terminos: string;
  estado: EstadoContrato;
}

export type EstadoContrato = 'vigente' | 'finalizado' | 'cancelado';
