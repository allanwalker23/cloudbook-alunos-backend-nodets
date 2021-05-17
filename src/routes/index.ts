import { Router } from 'express';

import transactionsRouter from './transactions.routes';
import alunoRouter from './alunos.routes'
import conteudoRouter from './conteudos.routes';
const routes = Router();

routes.use('/alunos', alunoRouter);
routes.use('/conteudos', conteudoRouter);

export default routes;
