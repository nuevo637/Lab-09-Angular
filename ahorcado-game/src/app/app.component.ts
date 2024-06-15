import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HangmanFigureComponent } from './hangman-figure/hangman-figure.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HangmanFigureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ahorcado-game';
}
