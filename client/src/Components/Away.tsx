import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
import React from "react"
import Player from "./Player/Player"


function Away(props: any) {
    const players = new Array(props.player)
    console.log(props, "away")
    return (
        <>

            {players.map((player) => {
                if (player.team === "away") {
                    return (
                        <TableRow>
                            <Player player={player} key={player.id} />
                        </TableRow>
                    )
                }
            }
            )}
        </>
    )

}



export default Away