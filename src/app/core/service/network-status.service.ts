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

  private updateOnlineStatus(status: boolean) {
    this.onlineStatus.next(status);
  }

  // Retorna o estado da conexão como Observable
  getNetworkStatus(): Observable<boolean>{
    return this.onlineStatus.asObservable();
  }

  // Metodo para verificar se a conexão está online
  isOnline(): boolean {
    return this.onlineStatus.value;
  }
}
