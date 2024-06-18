import { Component } from '@angular/core';
import { GameBoardComponent } from './game-board/game-board.component';
import { HangmanFigureComponent } from './hangman-figure/hangman-figure.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameBoardComponent, HangmanFigureComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
