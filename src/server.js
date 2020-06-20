// servidor trabalhar com requisições e repostas

const express = require("express")

const server = express()

//importar o banco de dados
const db = require("./database/db")

//config pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended: true}))

//utilizando template engine - tonar o HTML dinamico (puxar dados do servidor para um update de informação)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache:true
})

//config rota da aplicação // o html funciona por verbos. O get/ faz direcionamento de paginas pela URL e mostra informações dela(forms..)
// req: receber requisição
// res: enviar respostas
server.get("/", (req, res) => {
    return res.render("Index.html")
})
server.get("/create-point",(req, res) => {

    //req.query = query(lingaguem de consulta de dados) strings da URL
    //console.log(req.query)
    return res.render("create-point.html")
})
//o post esconde informações de formulario pelo 'method' post e salva o post numa get '/savepoint'
server.post("/savepoint",(req,res) => {
    
    // req.body = o corpo do formulario
    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no Cadastro")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }
    db.run(query, values, afterInsertData)


})
server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        
        //pesqusia vazia
        return res.render("search-result.html", { total: 0 })
    }

    // importar arquivos de consulta do banco de dados. * significa tudo/aplicar para tudo.
    db.all(`SELECT * FROM PLACES WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        // const para identificar total de pontos de coletas
        const total = rows.length
        //mostrar pagina html com informações do banco de dados
        return res.render("search-result.html", { places: rows, total })
    })
})

//ligar o servidor
server.listen(3000)

