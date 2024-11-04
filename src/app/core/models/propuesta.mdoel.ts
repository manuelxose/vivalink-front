// src/app/shared/models/propuesta.model.ts

export interface Propuesta {
  id: string;
  proveedorId: string;
  solicitudId: string;
  descripcion: string;
  precio: number;
  fechaEnvio: Date;
  estado: EstadoPropuesta;
}

export type EstadoPropuesta = 'pendiente' | 'aceptada' | 'rechazada';
