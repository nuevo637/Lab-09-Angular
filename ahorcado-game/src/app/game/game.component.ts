import { Component } from '@angular/core';
import { GameBoardComponent } from './game-board/game-board.component';
import { HangmanFigureComponent } from './hangman-figure/hangman-figure.component';
import { LetterBarComponent } from './letter-bar/letter-bar.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameBoardComponent, HangmanFigureComponent, LetterBarComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
