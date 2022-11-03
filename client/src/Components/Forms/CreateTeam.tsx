import * as React from 'react' 
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export default function TeamForm () {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            ml: "400px",
            '& > :not(style)': {
                m:1,
                width:500,
                height: 800,
            },
        }}
        >
         <Paper elevation={8}/>
        
        </Box>
    )
}