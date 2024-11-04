// src/app/shared/models/servicio.model.ts

import { CategoriaServicio } from './solicitud-de-servicio.model';

export interface Servicio {
  id: string;
  proveedorId: string;
  nombre: string;
  descripcion: string;
  categoria: CategoriaServicio;
  precioBase: number;
  fechaCreacion: Date;
}
