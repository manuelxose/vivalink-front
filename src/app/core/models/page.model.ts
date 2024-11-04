// src/app/shared/models/pago.model.ts

export interface Pago {
  id: string;
  contratoId: string;
  comunidadId: string;
  proveedorId: string;
  monto: number;
  fechaPago: Date;
  metodoPago: MetodoPago;
  estado: EstadoPago;
}

export type MetodoPago = 'tarjeta' | 'transferencia' | 'paypal' | 'otro';

export type EstadoPago = 'completado' | 'pendiente' | 'fallido';
