import { type } from 'os'
import {z} from 'zod'


export const createUserSchema = z.object({
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: "Name must be a string"
    }),

    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string"
    })
    .email("Must be a valid email"),


    password: z.string({
        required_error:"Password is required",
        invalid_type_error: "Password must be a string"
    })

})



export type createUserInput = z.infer<typeof createUserSchema>