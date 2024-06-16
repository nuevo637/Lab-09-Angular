import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HangmanFigureComponent } from './game/hangman-figure/hangman-figure.component';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ahorcado-game';
}
