import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioFamiliarService {
  hermanoGrande?: string;
  hermanoPequeño?: string;

  getHermanoGrande(): string {
    return (this.hermanoGrande || '' ) ;
  }

  SetHermanoGrande(nombre: string) {
    this.hermanoGrande = nombre;
  }

  getHermanoPequeño(): string {
    return this.hermanoPequeño || '';
  }

  SetHermanoPequeño(nombre: string) {
    this.hermanoPequeño = nombre;
  }

  saludar(hermano: string) {
    console.log(`Hola, ${hermano}`);
  }

  preguntarHijo(): string {
    return '¿Cómo esta tú hijo?';
  }

  constructor() {}
}
