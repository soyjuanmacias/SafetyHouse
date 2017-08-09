import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class NotificationsService {
  private url = 'http://localhost:8080';
  private socket;

  getNotifications() {
    let observable = new Observable(observer => {
      console.log('Cargando el servicio')
      this.socket = io(this.url);
      this.socket.on('notifications', (data) => {
        console.log('Imprimo data en servicio notifications =>')
        console.log(data)
        observer.next(data);
      });
    })
    return observable;
  }
}
