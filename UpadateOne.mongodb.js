/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"
/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"
/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].updateOne(
    {nome:"João da Silva"}, {$set: {nome:"Isaias Lima dos santos"}},
    {cpf:"123.456.789-00"}, {$set: {cpf:"321.456.555-00"}},
    {rg:"12.345.678"},      {$set: {rg:"31.345.555"}},
    {"cod_aluno": "1"}
);