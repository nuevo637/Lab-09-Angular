import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
    'eula',
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
    'genshin',
    'frontend',
    'backend',
    'base de datos',
    'honkai',
    'consulta',
    'wuthering',
    'pruebas',
    'waves'
  ];

  palabraActual: string = '';
  palabraOculta: string[] = [];
  intentos: number = 6;

  // Subject para emitir cambios en los intentos
  intentosCambio = new Subject<number>();

  constructor() {
    this.nuevaPalabra();
  }

  nuevaPalabra() {
    this.palabraActual = this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraOculta = Array(this.palabraActual.length).fill('_');
    this.intentos = 6;
    this.intentosCambio.next(this.intentos);
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
      this.intentosCambio.next(this.intentos);
    }
  }

  juegoTerminado(): boolean {
    return this.intentos <= 0 || this.palabraOculta.join('') === this.palabraActual;
  }
}