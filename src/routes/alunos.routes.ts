import {response, Router} from 'express';
import { getCustomRepository, getRepository, Like } from 'typeorm';
import Aluno from '../models/Aluno';
import AlunoRepository from '../repositories/AlunoRepository';

const alunoRouter = Router();

alunoRouter.get('/', async (request, response) => {
    const repo= getCustomRepository(AlunoRepository)
    const allUsers = await repo.find();

    return response.json(allUsers)
});

alunoRouter.get('/:id', async (request, response) => {
    const {id}= request.params;
    const repo= getCustomRepository(AlunoRepository)
    const allUsers = await repo.findOne(id)

    return response.json(allUsers)
});
  
alunoRouter.get('/searchName/:name', async(request,response)=>{
    const {name}= request.params;
    const repo= getCustomRepository(AlunoRepository)
    const findUser = await repo.find({
        nome:Like("%"+name+"%")
    });

    response.json(findUser)
})

 
  
  export default alunoRouter;
  