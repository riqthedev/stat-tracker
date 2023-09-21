import  express  from "express";
import { createUserSchema } from "./user.schema";
import { processRequestBody} from 'zod-express-middleware'
import { registerUser } from "./user.controller";
import requireUser from "../../middleware/requireUser";






const router  = express.Router()

router.get('/',requireUser, (req,res) => {
    return res.send(res.locals.user)
})

router.post('/', processRequestBody(createUserSchema), registerUser)

