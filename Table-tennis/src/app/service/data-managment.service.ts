import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Player } from '../interfaces/player.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

//import * as players from "../../assets/jsonData/player.json";

@Injectable({
  providedIn: 'root'
})
export class DataManagmentService {

  private jsonPlayersLocation = "../../assets/jsonData/player.json";

  constructor(private http: HttpClient) { }


  public loadPlayers(): Observable<Player[]> {
    return this.http.get(this.jsonPlayersLocation).pipe(map((player: any) => <Player[]>player));
  }
}
