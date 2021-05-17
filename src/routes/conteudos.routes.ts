import {Router} from 'express';
import { getCustomRepository } from 'typeorm';
import ConteudoRepository from '../repositories/ConteudoRepository';

const conteudoRouter = Router();

conteudoRouter.get('/:id', async (request, response) => {
    const {id}= request.params;
    const repo = getCustomRepository(ConteudoRepository);

    const conteudosUser =await repo.find({where:{alunoId:id}});
    response.json(conteudosUser)
  });
  
 
  
  export default conteudoRouter;
  