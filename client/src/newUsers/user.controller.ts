import { Request, Response } from "express";
import { createUserInput } from "./user.schema";
import { createUser } from "./users.service"
import { StatusCodes } from "http-status-codes";


export async function registerUser(req: Request<{},{}, createUserInput>, res: Response) {

    const {name, email, password} = req.body
    console.log(req.body,"Req Body")

    try {
        await createUser({name, email, password})
        return res.status(StatusCodes.CREATED).send("User Created Successfully")
    } catch (error) {
        console.log(error)
        if (error === 11000) {
            return res.status(StatusCodes.CONFLICT).send("User Already Exists!")
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
    }
}