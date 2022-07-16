import { Component, OnInit } from '@angular/core';
import { Match } from 'src/app/interfaces/matches.interface';
import { Player } from 'src/app/interfaces/player.interface';
import { DataManagmentService } from 'src/app/service/data-managment.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public players: Player[] = [];
  public player1: Player = {} as Player;
  public player2: Player = {} as Player;
  public match: Match = {} as Match;
  public player1Points: Array<number> = [];
  public player2Points: Array<number> = [];
  public set1Valid = false;
  public set2Valid = false;
  public set3Valid = false;
  public set4Valid = false;
  public set5Valid = false;
  public player1Id: number = -1;
  public player2Id: number = -1;
  public emptyPlayer = {} as Player;
  public matches: Match[] = [];
  public isOverview: boolean = false;
  public overviewMatch: Match = {} as Match;


  constructor(protected dataService: DataManagmentService) { }

  ngOnInit(): void {
    this.players = this.dataService.loadPlayers();
    this.matches = this.dataService.loadMatches();
  }

  public onSelectClick(playerIdentifier: string) {
    if (playerIdentifier === 'first') {
      this.player1 = <Player>this.players.find(player => player.id == this.player1Id);
    }

    if (playerIdentifier === 'second') {
      this.player2 = <Player>this.players.find(player => player.id == this.player2Id);
    }

  }

  public checkInput(value: any, identifier: string) {
    var reg = new RegExp('^[0-9]*$');

    if (identifier === 'player-1-set-1' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player1Points[0] = -1;
      }
    }

    if (identifier === 'player-1-set-2' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player1Points[1] = -1;
      }
    }

    if (identifier === 'player-1-set-3' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player1Points[2] = -1;
      }
    }

    if (identifier === 'player-1-set-4' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player1Points[3] = -1;
      }
    }

    if (identifier === 'player-1-set-5' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player1Points[4] = -1;
      }
    }

    if (identifier === 'player-2-set-1' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player2Points[0] = -1;
      }
    }

    if (identifier === 'player-2-set-2' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player2Points[1] = -1;
      }
    }

    if (identifier === 'player-2-set-3' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player2Points[2] = -1;
      }
    }

    if (identifier === 'player-2-set-4' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player2Points[3] = -1;
      }
    }

    if (identifier === 'player-2-set-5' && value.length > 0 && value !== '-' && value !== -1) {
      if (reg.test(value) === true) {
        let numberVal = Number(value);
      }
      else {
        this.player2Points[4] = -1;
      }
    }

    if (this.player1Points[0] && this.player2Points[0]) {
      let val1 = this.player1Points[0];
      let val2 = this.player2Points[0];
      let valid = this.dataService.isSetValid(val1, val2);
      this.set1Valid = valid;
    }
    else {
      this.set1Valid = false;
    }


    if (this.player1Points[1] && this.player2Points[1]) {
      let val1 = this.player1Points[1];
      let val2 = this.player2Points[1];
      let valid = this.dataService.isSetValid(val1, val2);
      this.set2Valid = valid;
    }
    else {
      this.set2Valid = false;
    }

    if (this.player1Points[2] && this.player2Points[2]) {
      let val1 = this.player1Points[2];
      let val2 = this.player2Points[2];
      let valid = this.dataService.isSetValid(val1, val2);
      this.set3Valid = valid;
    }
    else {
      this.set3Valid = false;
    }

    if (this.player1Points[3] && this.player2Points[3]) {
      let val1 = this.player1Points[3];
      let val2 = this.player2Points[3];
      let valid = this.dataService.isSetValid(val1, val2);
      this.set4Valid = valid;
    } else {
      this.set4Valid = false;
    }

    if (this.player1Points[4] && this.player2Points[4]) {
      let val1 = this.player1Points[4];
      let val2 = this.player2Points[4];
      let valid = this.dataService.isSetValid(val1, val2);
      this.set5Valid = valid;
    } else {
      this.set5Valid = false;
    }

  }

  public addNewGame() {
    let match: Match = {
      id: this.matches.length,
      player1: this.player1,
      player2: this.player2,
      player1Result: this.player1Points,
      player2Result: this.player2Points
    };
    this.matches.push(match);
    this.dataService.saveNewListOfMatches(this.matches);

    for (let i = 0; i < 5; i++) {
      if (this.player1Points[i] > this.player2Points[i]) {
        this.dataService.incrementPlayerPoint(this.player1Id, 1);
      }
      else {
        this.dataService.incrementPlayerPoint(this.player2Id, 1);
      }
    }
    this.resetFields();
  }

  public isButtonDisabled() {
    return this.set1Valid && this.set2Valid
      && this.set3Valid && this.set4Valid
      && this.set5Valid
      && Object.keys(this.player1).length !== 0 && Object.keys(this.player2).length !== 0;
  }

  public isPlayer1equalToTwo(playerId: number, identifier: string): boolean {
    if (identifier === 'first') {
      return this.player2Id == playerId;
    }
    if (identifier === 'second') {
      return this.player1Id == playerId;
    }
    return false;

  }

  public resetFields() {
    this.player1Id = -1;
    this.player2Id = -1;
    this.player1 = {} as Player;
    this.player2 = {} as Player;
    this.player1Points = [];
    this.player2Points = [];
    this.set1Valid = false;
    this.set2Valid = false;
    this.set3Valid = false;
    this.set4Valid = false;
    this.set5Valid = false;
  }

  public onOverviewClick(match?: Match) {
    this.isOverview = !this.isOverview;
    if (match) {
      this.overviewMatch = match;
    }
  }
}
