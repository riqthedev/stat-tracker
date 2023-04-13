export interface User {
    user_id: number,
    name: string
    email: string,
    password: string,
    team_id: number,
    team_name: string
}

export interface Team {
    team_id: number,
    team_name: string,
    players: number
}



export interface Player {
    player_id: number,
    team_id: number,
    team_name: string
    name: string, 
    team: string,
    jersey: number,

}

// export interface Stat {
//     player_id: number,
//     points: number,
//     rebounds: number,
//     steals: number,
//     blocks: number,
//     fouls: number,
//     assists: number,


// }


export interface Game {
    game_id: number,
    team_id: number
    created_at: Date,
    home_score: number,
    away_score: number

}