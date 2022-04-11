import { Component, OnInit } from '@angular/core';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  games: Game[] = [];
  message: String = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (value: Game[]) => this.games = value,
      complete: () => console.log('Game service completed'),
      error: (message) => this.message = message
    })
  }
}
