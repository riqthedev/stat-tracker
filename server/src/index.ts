import express, { Application, Request, Response } from 'express';
import * as dotenv from 'dotenv'
import bodyParser from 'body-parser';


dotenv.config()




const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Healthy')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
})

