import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { DataManagmentService } from 'src/app/service/data-managment.service';

@Component({
  selector: 'app-content-buttons',
  templateUrl: './content-buttons.component.html',
  styleUrls: ['./content-buttons.component.scss']
})
export class ContentButtonsComponent implements OnInit {

  public showPlayers: boolean = false;
  public showMatches: boolean = false;
  public showContentButtons: boolean = true;
  public players: Player[] = [];

  constructor(
    protected dataService: DataManagmentService
  ) { }

  ngOnInit(): void {
  }


  public onPlayersListClick() {
    this.showPlayers = !this.showPlayers;
    this.showContentButtons = false;
  }

  public onBackClick() {
    this.showContentButtons = true;
    this.showPlayers = false;
    this.showMatches = false;
  }

  public onNewMatchClick() {
    this.showMatches = !this.showMatches;
    this.showContentButtons = false;
  }

}
