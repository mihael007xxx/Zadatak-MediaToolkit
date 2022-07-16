import { Player } from "./player.interface";

export interface Match {
    id: number,
    player1: Player,
    player2: Player,
    player1Result: Array<number>,
    player2Result: Array<number>
}