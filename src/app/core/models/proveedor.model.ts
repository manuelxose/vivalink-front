// src/app/shared/models/proveedor.model.ts

import { Contrato } from './contrato.model';
import { Propuesta } from './propuesta.mdoel';
import { Servicio } from './servicio.model';

export interface Proveedor {
  id: string;
  nombre: string;
  tipoProveedor: TipoProveedor;
  serviciosOfrecidos: Servicio[];
  certificaciones: string[];
  calificaciones: Calificacion[];
  propuestasEnviadas: Propuesta[];
  contratos: Contrato[];
  fechaRegistro: Date;
}

export type TipoProveedor = 'autonomo' | 'empresa';

export interface Calificacion {
  id: string;
  comunidadId: string;
  puntuacion: number; // Por ejemplo, de 1 a 5
  comentario: string;
  fecha: Date;
}
