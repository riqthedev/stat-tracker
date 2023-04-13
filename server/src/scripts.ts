import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: 'test',
            email: 'test@test.com',
            password: "test"
        },
    })
    console.log(user)
    
}


createUser()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (err) => {
        console.log(err)
        await prisma.$disconnect()
        process.exit(1)
    })