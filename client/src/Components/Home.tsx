import { TableRow } from "@mui/material"
import React from "react"
import Player from "./Player/Player"


function Home(props: any) {
    const players = new Array(props.player)
    
    return (
        <>

            {players.map((player) => {
                if (player.team === "home") {
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



export default Home