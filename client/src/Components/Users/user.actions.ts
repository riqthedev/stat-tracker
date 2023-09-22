import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

async function createUser() {
    const user = await prisma.user.create({
        data: {
            name: "test",
            email:"test@test1.com"
        }
    })
    console.log(user)
}


createUser()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit(1)
})

export default createUser()