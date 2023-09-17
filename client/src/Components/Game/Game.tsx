import React, { FormEvent, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Home from '../Home';
import Away from '../Away';
import Inactive from '../Team/Inactive';
import NotActive from '../Player/NotActive';
import '../../index'
import { SubOut } from '../Player/Player';
import { DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid'






type Stat = "points" | "rebounds" | "steals" | "FT" | "2P" | "3P" | "Miss 3P" | "Miss 2P" | "Miss FT" | "assist" | "block" | "fouls" | "active"









function Game() {

    const createPlayer = ({ idx, players, setPlayers, userInput, team }) => {
        return {
            id: Number(idx),
            team: team,
            active: null,
            name: userInput,
            fg: [0, "-", 0],
            fgPercent: 0,
            threePt: [0.0, "-", 0.0,],
            threePercent: 0,
            ft: [0, "-", 0],
            rebounds: 0,
            assists: 0,
            blocks: 0,
            steals: 0,
            fouls: 0,
            points: 0,
            updatePlayer: (stat: Stat) => {
                const player = players.find((player) => player.id === idx)
                // update player depending on the stat increment

                if (player) {

                    if (stat === "FT") {
                        player["points"] += 1
                        player["ft"][0] += 1
                        player["ft"][2] += 1
                        player["fgPercent"] = Math.floor(player["fg"][0] / player["fg"][2] * 100)

                    } else if (stat === "2P") {
                        player["points"] += 2
                        player["fg"][0] += 1
                        player["fg"][2] += 1
                        player["fgPercent"] = Math.floor(player["fg"][0] / player["fg"][2] * 100)

                    } else if (stat === "3P") {
                        player["points"] += 3
                        player["threePt"][0] += 1
                        player["threePt"][2] += 1
                        player["fgPercent"] = Math.floor(player["fg"][0] / player["fg"][2] * 100)
                        player["threePercent"] = Math.floor(player["threePt"][0] / player["threePt"][2] * 100)

                    } else if (stat === "Miss FT") {
                        player["ft"][2] += 1

                    } else if (stat === "Miss 2P") {
                        player["fg"][2] += 1
                        player["fgPercent"] = Math.floor(player["fg"][0] / player["fg"][2] * 100)

                    } else if (stat === "Miss 3P") {
                        player["threePt"][2] += 1
                        player["fgPercent"] = Math.floor(player["fg"][0] / player["fg"][2] * 100)
                        player["threePercent"] = Math.floor(player["threePt"][0] / player["threePt"][2] * 100)
                    }
                    else {
                        player[stat] = player[stat] += 1
                    }
                }
                setPlayers([...players])
            },

        }
    }


    const columns: GridColDef[] = [
        {field: 'active', headerName: "Active", width: 100},
        {field: 'name', headerName: "Name", width: 100},
        {field: 'fg', headerName: "FG", width: 40},
        {field: 'threept', headerName: "3PT", width: 40},
        {field: 'ft', headerName: "FT", width: 40},
        {field: 'reb', headerName: "REB", width: 40},
        {field: 'ast', headerName: "AST", width: 40},
        {field: 'blk', headerName: "BLK", width: 40},
        {field: 'stl', headerName: "STL", width: 40},
        {field: 'fouls', headerName: "FOULS", width: 40},
        {field: 'pts', headerName: "PTS", width: 40},
        

    ]

    const rows = [
        { id: 0, active: "Active", name: "Nyriq", fg: "0-0", threept: "0-0", ft: "0-0", reb: 0, ast: 0, blk: 0, stl: 0, fouls: 0, pts: 0 }
    ]







    // Game should have active arrays for home and away respectively.
    // Player.active is initally "inactive"
    // If  player is active render active state
    // If (active)player is subbed out (inactive)player replaces active(player) in active Array
    // player stats should always be visble at all times






    // const RadioButton = ({ label, value, onChange, }) => {
    //     return (
    //         <label>
    //             <input type="radio" checked={value} onChange={onChange} />
    //             {label}
    //         </label>
    //     )
    // }









    // // const [players, setPlayers] = useState((new Array(0)).map((_, idx) => {
    // //     return createPlayer({ idx, players, setPlayers, userInput, team })
    // // }))



    // // const homeScore = () => {
    // //     let total = 0
    // //     const player = players.map((player) => {
    // //         if (player.team === "home") {
    // //             total += player.points
    // //         }
    // //     })
    // //     return total
    // // }




    // // const awayScore = () => {
    // //     let total = 0
    // //     const player = players.map((player) => {
    // //         if (player.team === "away") {
    // //             total += player.points
    // //         }
    // //     })
    // //     return total
    // // }

    // ///////////////////
    // const [teamView, setTeamView] = useState("home")


    // const toggleView = (e: React.MouseEvent<HTMLElement>, newTeamView: string) => {
    //     setTeamView(newTeamView)
    //     if (teamView === "home") {
    //         players.map((player) => {
    //             if (player.team === "home") {
    //                 return (
    //                     <Home player={player} />
    //                 )
    //             }
    //         })

    //     }

    //     if (teamView === "away") {
    //         players.map((player) => {
    //             if (player.team === "away") {
    //                 return (
    //                     <Away player={player} />
    //                 )
    //             }
    //         })

    //     }



    // }


    
    // const homeActive: any[] = []
    // const awayActive: any[] = []
    // const inactive:  any [] = []

        
    return (
        <table>
            <div>
                <DataGrid
                 rows={rows}
                 columns={columns}
                 checkboxSelection
                />
            </div>

        </table>
    )
}

export default Game


