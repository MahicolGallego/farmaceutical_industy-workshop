import { Router } from 'express';
import { medicationRouter } from './medicationRouter';

const routes: Router = Router();

routes.use('/', medicationRouter);

export default routes;
