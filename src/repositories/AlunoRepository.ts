import { EntityRepository, Repository } from 'typeorm';
import Aluno from '../models/Aluno';


@EntityRepository(Aluno)
class AlunoRepository extends Repository<Aluno> {
 
}

export default AlunoRepository;
