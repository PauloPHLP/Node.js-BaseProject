import { Router } from 'express';
import appointmentsRouter from './apointments.routes';
import usersRouter from './users.routes';
import sessions from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessions);

export default routes;
