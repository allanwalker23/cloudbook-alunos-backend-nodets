import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAluno1620995856464 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name:"aluno",
                columns:[
                    {
                        name:"id",
                        type:"int",
                        generationStrategy:"increment",
                        isPrimary:true
                    },
                    {
                        name:"nome",
                        type:"varchar(100)"
                    },
                    {
                        name:"avatar_url",
                        type:"varchar(300)"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:'now()'
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:'now()'
                    }
                ]
            }
                
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('aluno')
    }

}
