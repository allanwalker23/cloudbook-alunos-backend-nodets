import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Aluno from "./Aluno";

@Entity("conteudo")
export class Conteudo{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    avatar_url: string;


    @Column()
    alunoId: number;

    @ManyToOne(()=>Aluno)
    @JoinColumn({name:"alunoId"})
    aluno:Aluno;
}

export default Conteudo;