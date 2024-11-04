// src/app/core/services/notification.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Notificacion } from '../models/notificacion.model';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private apiService: ApiService) {}

  getNotifications(): Observable<Notificacion[]> {
    return this.apiService.get<Notificacion[]>('/notificaciones');
  }

  markAsRead(notificationId: string): Observable<any> {
    return this.apiService.put(
      `/notificaciones/${notificationId}/marcar-leido`,
      {}
    );
  }
}
