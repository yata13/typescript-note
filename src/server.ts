import express,{ Request, Response } from 'express';
import {AppDataSource} from './config/database';
import router from './routes/user.routes';

const app = express();
const port: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('server is running');
});

app.use('/users', router);
app.use('/users/:id', router);
app.use('/users/:id', router)
app.use('/users/:id', router)



AppDataSource.initialize()
  .then(()=>{
    console.log("database connected");

    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((error)=>{
    console.log(error);
  });