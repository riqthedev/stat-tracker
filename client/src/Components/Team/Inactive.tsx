import { TableRow } from "@mui/material"
import React from "react"
import NotActive from "../Player/NotActive"



function Inactive(props: any) {
    const players = new Array(props.player)
    
    return (
        <>

            {players.map((player) => {
                if (player.active === null || player.active === false) {
                    return (
                        <TableRow>
                            <NotActive player={player} key={player.id} />
                        </TableRow>
                    )
                }
            }
            )}
        </>
    )

}



export default Inactive