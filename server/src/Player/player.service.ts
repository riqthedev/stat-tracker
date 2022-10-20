import {PrismaClient} from '@prisma/client'
import { addPlayer } from './player.schema'

const prisma = new PrismaClient()

export async function newPlayer(input: addPlayer) {
    const player = await prisma.player.create({
        data: {
            Name: input.name
        }
    })
    return player
}