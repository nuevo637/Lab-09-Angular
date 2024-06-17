import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  palabras: string[] = [
    'angular', 
    'typescript', 
    'componente', 
    'servicio',
    'reactivo',
    'vue',
    'framework',
    'biblioteca',
    'módulo',
    'dependencia',
    'paquete',
    'node.js',
    'express',
    'mongodb',
    'sql',
    'api',
    'rest',
    'graphql',
    'json',
    'ajax',
    'http',
    'websocket',
    'frontend',
    'backend',
    'base de datos',
    'esquema',
    'consulta',
    'orm',
    'pruebas',
    'integración continua'
];

  palabraActual: string = '';
  palabraOculta: string[] = [];
  intentos: number = 6;

  constructor() {
    this.nuevaPalabra();
  }

  nuevaPalabra() {
    this.palabraActual = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = Array(this.palabraActual.length).fill('_');
    this.intentos = 6;
  }

  adivinar(letra: string) {
    let acierto = false;
    for (let i = 0; i < this.palabraActual.length; i++) {
      if (this.palabraActual[i] === letra) {
        this.palabraOculta[i] = letra;
        acierto = true;
      }
    }
    if (!acierto) {
      this.intentos--;
    }
  }

  juegoTerminado(): boolean {
    return this.intentos <= 0 || this.palabraOculta.join('') === this.palabraActual;
  }
}
