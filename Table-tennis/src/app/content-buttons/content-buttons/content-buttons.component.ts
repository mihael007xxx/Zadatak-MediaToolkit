import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-buttons',
  templateUrl: './content-buttons.component.html',
  styleUrls: ['./content-buttons.component.scss']
})
export class ContentButtonsComponent implements OnInit {

  public showPlayers: boolean = false;
  public showContentButtons: boolean = true;

  constructor() { }

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
