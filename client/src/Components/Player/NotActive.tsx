import React, {useState} from "react"

import TableCell from '@mui/material/TableCell';

import Checkbox from '@mui/material/Checkbox';


function NotActive(props: any) {





    const [checked, setChecked] = useState(false)

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {

        if (!checked) {
            props.player.active = true
        } if (checked) {
            props.player.active = false
        }

        setChecked(e.target.checked)

    }

   

    


    return (

        <>
           

            <TableCell size="small" align="center" sx={{ border: 1 }}>
            <Checkbox
                checked={checked}
                onChange={handleCheck}
                inputProps={{ 'aria-label': 'controlled', }} />
                <p>Not Active</p>
                

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