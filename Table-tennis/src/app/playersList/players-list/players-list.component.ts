import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { DataManagmentService } from 'src/app/service/data-managment.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  public players: Player[] = [];

  constructor(protected dataService: DataManagmentService) { }

  ngOnInit(): void {
    this.dataService.loadPlayers().subscribe(players => {
      this.players = players;
      this.players.sort((a, b) => b.points - a.points);
    });
  }

}
