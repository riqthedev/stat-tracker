import React, {useState} from "react"

import TableCell from '@mui/material/TableCell';

import Checkbox from '@mui/material/Checkbox';
import '../../index'





export function SubIn (props:any) {
    return (
        <button className="inactive-btn" onClick={()=> props.player.active = true}> Sub In</button>
    )
}


function NotActive(props: any) {




    
    

 
   

    


    return (

        <>
           

            <TableCell size="small" align="center" sx={{ border: 1 }}>
    
                <SubIn/>
                
            </TableCell>

            <TableCell size="small" align="center" sx={{ border: 1 }}>
                {props.player.name}
            </TableCell>


            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.fg}
            </TableCell>



            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.fgPercent}%
            </TableCell>


            <TableCell align="center" sx={{ border: 1, }}>
                {props.player.threePt}
            </TableCell>


            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.threePercent}%
            </TableCell>

            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.ft}
            </TableCell>

            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.rebounds}
              
            </TableCell>

            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.assists}
              
            </TableCell>

            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.blocks}
              
            </TableCell>


            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.steals}
              
            </TableCell>


            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.fouls}
              
            </TableCell>

            <TableCell align="center" sx={{ border: 1 }}>
                {props.player.points}
            </TableCell>




            <TableCell align="center" sx={{ border: 1 }}>
                <p>Not Active</p>

            </TableCell>
        </>
    )

}






export default NotActive