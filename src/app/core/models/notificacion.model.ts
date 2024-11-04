// src/app/shared/models/notificacion.model.ts

export interface Notificacion {
  id: string;
  usuarioId: string;
  tipo: TipoNotificacion;
  mensaje: string;
  fechaEnvio: Date;
  leido: boolean;
}

export type TipoNotificacion =
  | 'nueva_solicitud'
  | 'propuesta_recibida'
  | 'votacion_abierta'
  | 'contrato_actualizado'
  | 'pago_realizado';
