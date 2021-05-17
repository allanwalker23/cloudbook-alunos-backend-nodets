import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Conteudo from "./Conteudo";

@Entity("aluno")
export class Aluno{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    avatar_url: string;

    @CreateDateColumn()
    created_at:Date;

    @CreateDateColumn()
    updated_at:Date;

}

export default Aluno;