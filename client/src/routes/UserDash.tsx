import React from "react";
import Box from '@mui/material/Box'
import { Avatar, CardContent, Paper } from "@mui/material";
import { deepOrange } from "@mui/material/colors";


export default function User() {

    return (
        <>
        
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& >:not(style)': {
                        m: 1,
                        width: 250,
                        height: 750,
                        backgroundColor: 'white'
                    },  
                }}
             
            >
                <Paper elevation={8}> 
                <Avatar sx={{ bgcolor: deepOrange[500]}}>U</Avatar>
                </Paper>

               
            </Box>
        </>
    )
}