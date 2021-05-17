import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export class CreateConteudo1620995866925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table(
            {
                name:"conteudo",
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
                        name:"descricao",
                        type:"varchar(200)"
                    }    

                ]
            }
        ))

        await queryRunner.addColumn('conteudo', new TableColumn({
            name:'alunoId',
            type:'int'
        }))

        await queryRunner.createForeignKey('conteudo', new TableForeignKey({
            columnNames:["alunoId"],
            referencedColumnNames:["id"],
            referencedTableName:"aluno",
            onDelete:"CASCADE"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("conteudo")
    }

}
