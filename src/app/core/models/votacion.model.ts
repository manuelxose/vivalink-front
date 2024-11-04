// src/app/shared/models/votacion.model.ts

export interface Votacion {
  id: string;
  comunidadId: string;
  titulo: string;
  descripcion: string;
  opciones: OpcionVotacion[];
  resultados: ResultadoVotacion[];
  fechaInicio: Date;
  fechaFin: Date;
  estado: EstadoVotacion;
}

export interface OpcionVotacion {
  id: string;
  texto: string;
}

export interface ResultadoVotacion {
  opcionId: string;
  votos: number;
}

export type EstadoVotacion = 'abierta' | 'cerrada';
