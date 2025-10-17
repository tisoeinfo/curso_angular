import { Component } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css'],
})
export class PadreComponent {
  constructor(private _servicioFamiliarService: ServicioFamiliarService) {}

  mensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.mensajeRecibido = $event;
  }

  // Contador:
  valorContador: number = 0;

  incrementar() {
    this.valorContador++;
  }

  decrementar() {
    this.valorContador--;
  }

  // mensajePadre = 'Mensaje desde el componente Padre';
}