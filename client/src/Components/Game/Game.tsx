import React, { FormEvent, useState } from 'react'
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






    const [userInput, setUserInput] = useState(" ")
    const [team, setTeam] = useState("home")


    const RadioButton = ({ label, value, onChange, }) => {
        return (
            <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
            </label>
        )
    }

    const handleTeamAway = () => {
        setTeam("away")
    }

    const handleTeamHome = () => {
        setTeam("home")
    }


    const handleChange = (e: FormEvent<HTMLInputElement>) => {
        setUserInput(e.currentTarget.value)
    }



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const idx = players.length
        setUserInput(userInput)
        setTeam(team)
        const newPlayer = createPlayer({ idx, players, setPlayers, userInput, team })
        players.push(newPlayer);
        setUserInput("")
    }




    const [players, setPlayers] = useState((new Array(0)).map((_, idx) => {
        return createPlayer({ idx, players, setPlayers, userInput, team })
    }))



    const homeScore = () => {
        let total = 0
        const player = players.map((player) => {
            if (player.team === "home") {
                total += player.points
            }
        })
        return total
    }




    const awayScore = () => {
        let total = 0
        const player = players.map((player) => {
            if (player.team === "away") {
                total += player.points
            }
        })
        return total
    }

    ///////////////////
    const [teamView, setTeamView] = useState("home")


    const toggleView = (e: React.MouseEvent<HTMLElement>, newTeamView: string) => {
        setTeamView(newTeamView)
        if (teamView === "home") {
            players.map((player) => {
                if (player.team === "home") {
                    return (
                        <Home player={player} />
                    )
                }
            })

        }

        if (teamView === "away") {
            players.map((player) => {
                if (player.team === "away") {
                    return (
                        <Away player={player} />
                    )
                }
            })

        }



    }


    
    const homeActive: any[] = []
    const awayActive: any[] = []
    const inactive:  any [] = []

        
    return (
        <>



            <form onSubmit={handleSubmit}>
                <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Player Name" />
                <div>
                    <RadioButton
                        label="Home"
                        value={team === "home"}
                        onChange={handleTeamHome}
                    />

                    <RadioButton
                        label="Away"
                        value={team === "away"}
                        onChange={handleTeamAway}
                    />
                </div>

                <button type='submit'>Submit</button>

            </form>

            <h2>Home:{homeScore()}</h2>
            <h2>Away:{awayScore()}</h2>
            <ToggleButtonGroup
                color="primary"
                value={teamView}
                exclusive
                onChange={toggleView}
                aria-label="Platform"
            >

                <ToggleButton value="home">Home</ToggleButton>
                <ToggleButton value="away">Away</ToggleButton>
            </ToggleButtonGroup>


            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>Active</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>Name</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>FG</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>FG%</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>3PT</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>3P%</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>FT</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>REB</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>AST</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>BLK</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>STL</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>Fouls</TableCell>
                            <TableCell align="center" sx={{ border: 2, width: '40', height: '40' }}>PTS</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {players.map((player) => {

                           

                            if (teamView === "home" ) {
                                return (
                                    <Home player={player} key={player.id} />
                                )
                            } if (teamView === "away" ) {
                                return (
                                    <Away player={player} key={player.id} />
                                )
                            } 
                        }
                        )}


                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default Game