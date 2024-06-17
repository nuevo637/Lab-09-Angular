import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  letra: string = '';

  constructor(public gameService: GameService) {}

  adivinar(letra: string) {
    if (letra.length === 1) {
      this.gameService.adivinar(letra);
    }
    this.letra = '';
  }

  nuevaPalabra() {
    this.gameService.nuevaPalabra();
  }
}
