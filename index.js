//Importando o pacote do Express.js
const express = require("express")

// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// Configurabdo a view engine - ejs
app.set('view engine', 'ejs')
// Criando a rota principal (RAIZ) do site
// O método get cria uma rota na aplicação
//req trata requisição
//res trata a resposta

app.get("/", (req, res) => {
  res.send("Bem-vindo ao meu primeiro site em Node.js!</h1><br><p> Iniciando estudo com Node.js!</p>");
});

// Rota perfil
//:nome -> parâmetro obrigatório
//:nome? -> parâmetro opcional
app.get("/perfil/:nome?", (req,res) =>{
    // Coletando o parâmetro nome da rota e gravando na variável
      //res.send("<h1>Perfil do usuário</h1>")
    const nome = req.params.nome;
    if (nome) {
        res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
    } else {
        res.send(`<h2>Olá! Faça login para acessar o seu perfil!</h2>`)
    }
});

//Rota de produtos
app.get("/produtos", (req, res) =>{
    res.render("produtos");
});

// Iniciando o servidor da aplicação
// Porta 8080
// O método listen do Expresws inicia o servidor

app.listen(8081, (error) =>{
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    } else {
        console.log(
            "parabéns! Você iniciou o seu primeiro programa."
        );
    }
});