import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/matches.interface';
import { Player } from 'src/app/interfaces/player.interface';
import { DataManagmentService } from 'src/app/service/data-managment.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public players: Player[] = [];
  public name: string = "";
  public surname: string = "";
  public matches: Match[] = [];
  public isOverview: boolean = false;
  public playerMatches: Match[] = [];

  constructor(protected dataService: DataManagmentService) { }

  /**
   * Load players on component load
   */
  ngOnInit(): void {
    this.players = this.dataService.loadPlayers();
    this.matches = this.dataService.loadMatches();
  }

  /**
   * Add new player
   */
  public onAddNewClick(): void {
    let player: Player = {
      id: this.players.length,
      name: this.name,
      surname: this.surname,
      points: 0
    };
    this.name = "";
    this.surname = "";

    this.players.push(player);
    this.dataService.saveNewListOfPlayers(this.players);
  }

  public onOverviewClick(player?: Player) {
    this.isOverview = !this.isOverview;
    if (player) {
      this.playerMatches = this.matches.filter(match => match.player1.id == player.id || match.player2.id == player.id);
    }
  }

  public getStringResult(match: Match): string {
    let player1Counter = 0;
    let player2Counter = 0;

    for (let i = 0; i < 5; i++) {
      if (match.player1Result[i] > match.player2Result[i]) {
        player1Counter++;
      }
      else {
        player2Counter++;
      }
    }

    return String(player1Counter + " : " + player2Counter);
  }

}
