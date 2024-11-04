// src/app/shared/models/menu-item.model.ts

export interface MenuItem {
  label: string;
  icon: string;
  route: string;
  roles: string[]; // Roles que pueden ver este ítem
}
