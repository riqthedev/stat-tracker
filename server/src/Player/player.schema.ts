import {z} from 'zod'

export const addPlayerSchema = z.object({
    name: z.string({
        required_error: 'Name is required!',
    })
})




export type addPlayer = z.infer<typeof addPlayerSchema>