// src/app/core/services/menu.service.ts

import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { MENU_ITEMS } from '../../shared/constants/menu.constants';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private authService: AuthService) {}

  getMenuItems(): MenuItem[] {
    const currentUser = this.authService.currentUserValue;
    if (!currentUser) {
      return [];
    }

    return MENU_ITEMS.filter((item) => item.roles.includes(currentUser.rol));
  }
}
