//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//expotar o  db para a aplicação
module.exports = db

//utilizar o objeto de banco de dados para nossas operações
// db.serialize( () => {

//     // as funcionalidades abaixo serão escritas com comandos SQL.

// //criar tabela. Neste caso a tabela a ser criada vai levar o nome de places, cada place tera um I integer e os elmentos são os abaixo
//     // db.run(`
//     //     CREATE TABLE IF NOT EXISTS places (
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         image TEXT,
//     //         name TEXT,
//     //         address TEXT,
//     //         address2 TEXT,
//     //         state TEXT,
//     //         city TEXT,
//     //         items TEXT
//     //     );
//     // `)

//     // //inserir dados
//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//     //     "Paperside",
//     //     "Guilherme Gembella, Jardim América",
//     //     "Nº 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Papeis e Papelão"
//     // ]

//     // function afterInsertData(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }
//     // db.run(query, values, afterInsertData)

//     //consultar os dados
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registro")
//     //     console.log(rows)
//     // })

//     //deletar um dado, depois que um dado é deletado o id continua seguindo a ordem integer constat sem preencher o id deletado
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso")

//     // })

// })

