import React, {useState} from "react"

import TableCell from '@mui/material/TableCell';

import Checkbox from '@mui/material/Checkbox';




function Player(props: any) {






   

    


    return (

        <>
           

            <TableCell size="small" align="center" sx={{ border: 1}}>
            
            <button className="active-btn" onClick={()=> props.player.active = false}> Sub Out</button>
                
            </TableCell>

            <TableCell size="small" align="center" sx={{ border: 1}}>
                {props.player.name}
            </TableCell>


            <TableCell align="center" sx={{ border: 1}}>
                {props.player.fg}
            </TableCell>



            <TableCell align="center" sx={{ border: 1}}>
                {props.player.fgPercent}%
            </TableCell>


            <TableCell align="center" sx={{ border: 1}}>
                {props.player.threePt}
            </TableCell>


            <TableCell align="center" sx={{ border: 1}}>
                {props.player.threePercent}%
            </TableCell>

            <TableCell align="center" sx={{ border: 1}}>
                {props.player.ft}
            </TableCell>

            <TableCell align="center" sx={{ border: 1}}>
                {props.player.rebounds}
                <button onClick={() => { props.player.updatePlayer("rebounds") }}>+</button>
            </TableCell>

            <TableCell align="center" sx={{ border: 1}}>
                {props.player.assists}
                <button onClick={() => { props.player.updatePlayer("assists") }}>+</button>
            </TableCell>

            <TableCell align="center" sx={{ border: 1}}>
                {props.player.blocks}
                <button onClick={() => { props.player.updatePlayer("blocks") }}>+</button>
            </TableCell>


            <TableCell align="center" sx={{ border: 1}}>
                {props.player.steals}
                <button onClick={() => { props.player.updatePlayer("steals") }}>+</button>
            </TableCell>


            <TableCell align="center" sx={{ border: 1}}>
                {props.player.fouls}
                <button onClick={() => { props.player.updatePlayer("fouls") }}>+</button>
            </TableCell>

            <TableCell align="center" sx={{ border: 1}}>
                {props.player.points}
            </TableCell>




            <TableCell align="center" sx={{ border: 1}}>
                <button onClick={() => { props.player.updatePlayer("FT") }}>Made FT</button>
                <button onClick={() => { props.player.updatePlayer("2P") }}>Made 2</button>
                <button onClick={() => { props.player.updatePlayer("3P") }}>Made 3</button>
                <br /><br />
                <button onClick={() => { props.player.updatePlayer("Miss FT") }}>Miss FT</button>
                <button onClick={() => { props.player.updatePlayer("Miss 2P") }}>Miss 2</button>
                <button onClick={() => { props.player.updatePlayer("Miss 3P") }}>Miss 3</button>

            </TableCell>
        </>
    )

}






export default Player