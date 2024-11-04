// src/app/shared/models/comunidad.model.ts

import { Contrato } from './contrato.model';
import { Documento } from './documento.model';
import { SolicitudDeServicio } from './solicitud-de-servicio.model';
import { Usuario } from './usuario.model';
import { Votacion } from './votacion.model';

export interface Comunidad {
  id: string;
  nombre: string;
  direccion: string;
  miembros: Usuario[];
  solicitudes: SolicitudDeServicio[];
  votaciones: Votacion[];
  contratos: Contrato[];
  documentos: Documento[];
  fechaCreacion: Date;
}
