import express, { Application } from 'express';
import { errorHandler } from './middlewares/error.handler';
import dotenv from 'dotenv';
import mainRouter from './routes/Router';
import { startServer } from './config/db';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', mainRouter);
app.use(errorHandler);

startServer(app, PORT);
