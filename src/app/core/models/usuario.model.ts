// src/app/shared/models/usuario.model.ts

export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: RolUsuario;
  fechaRegistro: Date;
  estado: EstadoUsuario;
  token: string;
}

export type RolUsuario = 'comunidad' | 'proveedor' | 'admin';

export type EstadoUsuario = 'activo' | 'inactivo' | 'suspendido';
