// src/app/shared/constants/menu.constants.ts

import { MenuItem } from '../../core/models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    route: '/dashboard',
    roles: ['comunidad', 'proveedor', 'admin'],
  },
  {
    label: 'Solicitudes',
    icon: 'request_page',
    route: '/solicitudes',
    roles: ['comunidad'],
  },
  {
    label: 'Propuestas',
    icon: 'assignment',
    route: '/propuestas',
    roles: ['proveedor'],
  },
  {
    label: 'Contratos',
    icon: 'contract',
    route: '/contratos',
    roles: ['comunidad', 'proveedor'],
  },
  {
    label: 'Votaciones',
    icon: 'poll',
    route: '/votaciones',
    roles: ['comunidad'],
  },
  {
    label: 'Administración',
    icon: 'admin_panel_settings',
    route: '/admin',
    roles: ['admin'],
  },
  {
    label: 'Pagos',
    icon: 'payment',
    route: '/pagos',
    roles: ['comunidad', 'proveedor'],
  },
  {
    label: 'Notificaciones',
    icon: 'notifications',
    route: '/notificaciones',
    roles: ['comunidad', 'proveedor', 'admin'],
  },
  {
    label: 'Reportes',
    icon: 'report',
    route: '/reports',
    roles: ['admin'],
  },
];
