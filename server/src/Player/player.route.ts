import express from 'express'
import { newPlayer } from './player.service'


const router = express.Router()


router.post('/',newPlayer) 


export default router