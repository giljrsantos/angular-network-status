import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkStatusService {

  private readonly onlineStatus = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    // Detecta quando o usuário fica offline
    window.addEventListener('online', () => this.updateOnlineStatus(true));
    // Detecta quando o usuário volta online
    window.addEventListener('offline', () => this.updateOnlineStatus(false));
  }

  /**
   * Updates the online status and emits a new value to all subscribers.
   * @param status the new online status
   */
  private updateOnlineStatus(status: boolean) {
    this.onlineStatus.next(status);
  }

  // Retorna o estado da conexão como Observable
  /**
   * Retrieves an observable that emits the current network status.
   *
   * @returns {Observable<boolean>} An observable that emits `true` when the network is online
   * and `false` when it is offline.
   */
  getNetworkStatus(): Observable<boolean>{
    return this.onlineStatus.asObservable();
  }

  // Metodo para verificar se a conexão está online
  /**
   * Checks the current online status of the application.
   *
   * @returns {boolean} `true` if the application is online, otherwise `false`.
   */
  isOnline(): boolean {
    return this.onlineStatus.value;
  }
}
