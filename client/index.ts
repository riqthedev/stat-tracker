import { Prisma, PrismaClient } from "@prisma/client"
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/addPlayer', async(req,res) => {
    const { name, email} = req.body

    const result = await prisma.user.create({
        data: {
            name,
            email,
        },
    })
    res.json(result)
    console.log(result)

    
})




const server = app.listen(4000, () =>
console.log(`🚀 Server ready at: http://localhost:4000`))