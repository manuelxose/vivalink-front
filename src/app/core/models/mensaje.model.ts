// src/app/shared/models/mensaje.model.ts

export interface Mensaje {
  id: string;
  emisorId: string;
  receptorId: string;
  contenido: string;
  fechaEnvio: Date;
  leido: boolean;
}
