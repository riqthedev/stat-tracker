
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function CreateGame(props) {

    const {values,submit,change} = props



   
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = event.target
    console.log(value)
    

}

const handleSubmit = (event:any) => {
    event.preventDefault()
    

}



    return (
        <>


            <form onSubmit={handleSubmit}>
                <Card sx={{
                    border: 'solid 1px black',
                    display: 'flex',
                    justifyContent: "center",
                    width: 500,
                    height: 700,
                    ml: 50,
                    borderRadius: 15
                }}>

                    <CardContent>
                        <Typography sx={{ fontSize: 40, mb: 10, ml: 15 }}>
                            Stat Tracker
                        </Typography>

                        <div>
                            <TextField
                                required
                                id="name"
                                label="Name"
                                defaultValue="Kevin Durant"
                                onChange={handleChange} />

                            <TextField
                                required
                                id="outline-required"
                                label="Jersey Number"
                                defaultValue="7" />
                            <Button
                                variant="contained"
                                onClick={handleSubmit}
                            >Submit
                            </Button>
                        </div>
                    </CardContent>

                </Card>

            </form>



        </>

    )
}
