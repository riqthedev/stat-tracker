import { PrismaClient } from "@prisma/client";
import { createUserInput } from "./user.schema";


const prisma = new PrismaClient()


export async function createUser(input: createUserInput) {
    const newUser = await prisma.user.create({
        data: {
            name: input.name,
            email: input.email,
            password: input.password
        }
    })
    
}