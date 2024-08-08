import { Router } from 'express';
import { medicationRouter } from './medicationRouter';

const routes: Router = Router();

routes.use('/medications', medicationRouter);

export default routes;
