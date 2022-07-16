import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player.interface';
import { HttpClient } from '@angular/common/http';
import { Match } from '../interfaces/matches.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagmentService {
  private playersIdentifier = "PLAYERS";
  private matchesIdentifier = "MATCHES";

  constructor(private http: HttpClient) { }

  /**
   * Load existing players
   * @returns 
   */
  public loadPlayers(): Player[] {
    let players = localStorage.getItem(this.playersIdentifier);
    if (players) {
      return JSON.parse(players);
    } else {
      return [];
    }
  }

  /**
 * Load existing players
 * @returns 
 */
  public loadMatches(): Match[] {
    let matches = localStorage.getItem(this.matchesIdentifier);
    if (matches) {
      return JSON.parse(matches);
    } else {
      return [];
    }
  }

  public incrementPlayerPoint(playerId: number, increment: number) {
    let players = this.loadPlayers();
    let player = players.find(player => player.id == playerId);
    if (player) {
      let index = players.indexOf(player);
      player.points += increment;
      players.splice(index, 1, player);
    }
    this.saveNewListOfPlayers(players);
  }

  /**
   * Save new list of players
   * @param players 
   */
  public saveNewListOfPlayers(players: Player[]) {
    localStorage.setItem(this.playersIdentifier, JSON.stringify(players));
  }

  public saveNewListOfMatches(matches: Match[]) {
    localStorage.setItem(this.matchesIdentifier, JSON.stringify(matches));
  }

  public isSetValid(val1: number, val2: number): boolean {
    let valid = false;

    if (val1 < 0 || val2 < 0) {
      return false;
    }

    if (val1 > 10 && val2 < 10) {
      if (val1 == 11) {
        return true;
      }
      return false;
    }

    if (val2 > 10 && val1 < 10) {
      if (val2 == 11) {
        return true;
      }
      return false;
    }

    if (val1 >= 10 && val2 >= 10) {
      return Math.abs(val1 - val2) === 2;
    }

    return valid;
  }
}
