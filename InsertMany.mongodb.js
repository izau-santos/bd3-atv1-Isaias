/*NOME DO BANCO DE DADOS*/
const database = "BD3-NoSQL-AtlasMongoDB"

/*NOME DA COLEÇÃO*/
const collection = "bd3-nosql-atv1"

/*USAR OU CRIAR O BANCO DE DADOS*/
use(database)

db[collection].insertMany(
[
    {
        "cod_aluno":"1",
        "cod_turma":"T101",
        "nome":"João da Silva",
        "cpf":"123.456.789-00",
        "rg":"12.345.678",
        "telefone_aluno":"(31) 91234-5678",
        "telefone_responsavel":"(31) 98765-4321",
        "email":"joao.silva@email.com",
        "data_nascimento":"2005-05-15"
    },
    {
        "cod_aluno":"2",
        "cod_turma":"T102",
        "nome":"Maria Oliveira",
        "cpf":"987.654.321-00",
        "rg":"98.765.432",
        "telefone_aluno":"(11) 92345-6789",
        "telefone_responsavel":"(11) 97654-3210",
        "email":"maria.oliveira@email.com",
        "data_nascimento":"2006-09-10"
    },
    {
        "cod_aluno":"3",
        "cod_turma":"T103",
        "nome":"Carlos Pereira",
        "cpf":"321.654.987-00",
        "rg":"32.165.498",
        "telefone_aluno":"(21) 93456-7890",
        "telefone_responsavel":"(21) 96543-2109",
        "email":"carlos.pereira@email.com",
        "data_nascimento":"2007-02-20"
    },
    {
        "cod_aluno":"4",
        "cod_turma":"T104",
        "nome":"Ana Costa",
        "cpf":"456.789.123-00",
        "rg":"45.678.912",
        "telefone_aluno":"(51) 94567-8901",
        "telefone_responsavel":"(51) 95432-1098",
        "email":"ana.costa@email.com",
        "data_nascimento":"2005-12-25"
    },
    {
        "cod_aluno":"5",
        "cod_turma":"T105",
        "nome":"Pedro Almeida",
        "cpf":"654.321.987-00",
        "rg":"65.432.198",
        "telefone_aluno":"(71) 95678-9012",
        "telefone_responsavel":"(71) 94321-0987",
        "email":"pedro.almeida@email.com",
        "data_nascimento":"2006-07-30"
    },
    {
        "cod_aluno":"6",
        "cod_turma":"T106",
        "nome":"Julia Fernandes",
        "cpf":"789.123.456-00",
        "rg":"78.912.345",
        "telefone_aluno":"(41) 96789-0123",
        "telefone_responsavel":"(41) 93210-9876",
        "email":"julia.fernandes@email.com",
        "data_nascimento":"2007-01-18"
    },
    {
        "cod_aluno":"7",
        "cod_turma":"T107",
        "nome":"Lucas Souza",
        "cpf":"123.987.654-00",
        "rg":"12.987.654",
        "telefone_aluno":"(48) 97890-1234",
        "telefone_responsavel":"(48) 92109-8765",
        "email":"lucas.souza@email.com",
        "data_nascimento":"2005-03-05"
    },
    {
        "cod_aluno":"8",
        "cod_turma":"T108",
        "nome":"Fernanda Lima",
        "cpf":"987.123.654-00",
        "rg":"98.712.365",
        "telefone_aluno":"(31) 98901-2345",
        "telefone_responsavel":"(31) 99876-5432",
        "email":"fernanda.lima@email.com",
        "data_nascimento":"2006-08-15"
    },
    {
        "cod_aluno":"9",
        "cod_turma":"T109",
        "nome":"Ricardo Mendes",
        "cpf":"654.987.321-00",
        "rg":"65.498.732",
        "telefone_aluno":"(21) 91234-5678",
        "telefone_responsavel":"(21) 98765-4321",
        "email":"ricardo.mendes@email.com",
        "data_nascimento":"2007-04-22"
    },
    {
        "cod_aluno":"10",
        "cod_turma":"T110",
        "nome":"Isabela Santos",
        "cpf":"321.789.654-00",
        "rg":"32.178.965",
        "telefone_aluno":"(11) 93456-7890",
        "telefone_responsavel":"(11) 96543-2109",
        "email":"isabela.santos@email.com",
        "data_nascimento":"2005-11-10"
    }
]
)