
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'




const initialFormValues = {
    name: " ",
    number: " "
}

const initialErrors = {
    name: " ",
    number: " "
}









export default function CreateGame() {


    interface FormDataType { name: string, number: string }
    const initialPlayers: FormDataType[] = []
    const formData: FormDataType = { name: "", number: "" }
    const [responseBody, setResponseBody] = useState<FormDataType>(formData)
    const [players, setPlayers] = useState(initialPlayers)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setResponseBody({ ...responseBody, [name]: value })
    }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        console.log(responseBody)

    }

    




    return (
        <>


            <form onSubmit={onSubmitHandler}>
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
                                name='name'
                                value={responseBody.name}
                                defaultValue="Kevin Durant"
                                onChange={inputChangeHandler} />

                            <TextField
                                required
                                id="outline-required"
                                label="Jersey Number"
                                name="number"
                                type='number'
                                value={responseBody.number}
                                defaultValue="7"
                                onChange={inputChangeHandler} />
                            <Button
                                variant="contained"
                                type='submit'
                            >Submit
                            </Button>
                        </div>
                    </CardContent>

                </Card>

            </form>



        </>

    )
}
