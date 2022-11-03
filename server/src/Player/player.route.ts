import express from 'express'
import { newPlayer } from './player.service'


const router = express.Router()

router.get("/", (req,res) => {
    res.send(res.locals)
})
router.post("/", newPlayer)



export default router