import React, { FormEvent, useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'






type Stat = "points" | "rebounds" | "steals" | "FT" | "2P" | "3P" | "Miss 3P" | "Miss 2P" | "Miss FT" | "assist" | "block" | "fouls" | "active"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));







function Game() {

    function createRow (
        name: string,
        fg: string,
        threept: string,
        reb: number,
        ast: number,
        blk: number,
        stl: number,
        fouls: number,
        pts: number
    ) {
        return {
            name,
            fg,
            threept,
            reb,
            ast,
            blk,
            stl,
            fouls,
            pts
        }
    }

    const rows= [
        createRow(
            "Durant",
            "4-5",
            "2-2",
            4,
            3,
            7,
            10,
            1,
            20,
        )
    ]

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



        
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Active</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">FG</StyledTableCell>
              <StyledTableCell align="right">3PT</StyledTableCell>
              <StyledTableCell align="right">REB</StyledTableCell>
              <StyledTableCell align="right">AST</StyledTableCell>
              <StyledTableCell align="right">BLK</StyledTableCell>
              <StyledTableCell align="right">STL</StyledTableCell>
              <StyledTableCell align="right">FOULS</StyledTableCell>
              <StyledTableCell align="right">PTS</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  Active
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.fg}</StyledTableCell>
                <StyledTableCell align="right">{row.threept}</StyledTableCell>
                <StyledTableCell align="right">{row.reb}</StyledTableCell>
                <StyledTableCell align="right">{row.ast}</StyledTableCell>
                <StyledTableCell align="right">{row.blk}</StyledTableCell>
                <StyledTableCell align="right">{row.stl}</StyledTableCell>
                <StyledTableCell align="right">{row.fouls}</StyledTableCell>
                <StyledTableCell align="right">{row.pts}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  
    )
}

export default Game


