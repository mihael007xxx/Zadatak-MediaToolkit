import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player.interface';
import { DataManagmentService } from 'src/app/service/data-managment.service';

@Component({
  selector: 'app-content-buttons',
  templateUrl: './content-buttons.component.html',
  styleUrls: ['./content-buttons.component.scss']
})
export class ContentButtonsComponent implements OnInit {

  public showPlayers: boolean = true;
  public showContentButtons: boolean = false;
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
  }

}
