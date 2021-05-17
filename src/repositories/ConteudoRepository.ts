import { EntityRepository, Repository } from "typeorm";
import Conteudo from "../models/Conteudo";

@EntityRepository(Conteudo)
class ConteudoRepository extends Repository<Conteudo>{

}

export default ConteudoRepository;