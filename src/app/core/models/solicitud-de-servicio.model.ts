// src/app/shared/models/solicitud-de-servicio.model.ts

import { Propuesta } from './propuesta.mdoel';

export interface SolicitudDeServicio {
  id: string;
  titulo: string;
  descripcion: string;
  comunidadId: string;
  categoriaServicio: CategoriaServicio;
  fechaCreacion: Date;
  fechaLimite: Date;
  estado: EstadoSolicitud;
  propuestasRecibidas: Propuesta[];
}

export type CategoriaServicio =
  | 'limpieza'
  | 'mantenimiento'
  | 'reformas'
  | 'jardineria'
  | 'seguridad'
  | 'otro';

export type EstadoSolicitud =
  | 'abierta'
  | 'cerrada'
  | 'en_proceso'
  | 'finalizada';
