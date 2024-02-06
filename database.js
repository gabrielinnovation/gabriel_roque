// Importando os módulos necessários
const sqlite3 = require('sqlite3').verbose(); // Módulo para trabalhar com SQLite
const express = require('express'); // Módulo para criar o servidor web
const bodyParser = require('body-parser'); // Módulo para analisar o corpo das requisições HTTP

// Conectando ao banco de dados SQLite
let db = new sqlite3.Database('./novobanco.db', (err) => {
    if (err) {
      console.error(err.message); // Em caso de erro na conexão, imprime a mensagem de erro
    }
    console.log('Conectado ao novo banco de dados.'); // Se conectado com sucesso, imprime a mensagem de sucesso
});

// Criando a tabela 'formulario' no banco de dados
db.run(`CREATE TABLE formulario (
    nome text NOT NULL,
    email text NOT NULL,
    celular text,
    mensagem text NOT NULL
)`, (err) => {
  if (err) {
    console.log(err.message); // Em caso de erro na criação da tabela, imprime a mensagem de erro
  } else {
    console.log('Tabela criada com sucesso.'); // Se a tabela foi criada com sucesso, imprime a mensagem de sucesso
  }
});

// Inserindo uma linha na tabela 'formulario'
db.run(`INSERT INTO formulario(nome, email, celular, mensagem) VALUES(?, ?, ?, ?)`, ['Nome', 'email@example.com', '1234567890', 'Esta é uma mensagem.'], function(err) {
    if (err) {
      return console.log(err.message); // Em caso de erro na inserção, imprime a mensagem de erro
    }
    console.log(`Uma linha foi inserida com a ID da linha ${this.lastID}`); // Se a linha foi inserida com sucesso, imprime a mensagem de sucesso
});

// Criando o servidor web com Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Configurando o bodyParser para analisar o corpo das requisições HTTP

// Iniciando o servidor na porta 3000
app.listen(3000, function() {
  console.log('Servidor rodando na porta 3000.'); // Imprime a mensagem de sucesso quando o servidor é iniciado
});

// Configurando a rota POST '/formulario'
app.post('/formulario', (req, res) => {
    let nome = req.body.nome; // Obtendo o valor do campo 'nome' do corpo da requisição
    let email = req.body.email; // Obtendo o valor do campo 'email' do corpo da requisição
    let celular = req.body.celular; // Obtendo o valor do campo 'celular' do corpo da requisição
    let mensagem = req.body.mensagem; // Obtendo o valor do campo 'mensagem' do corpo da requisição
  
    // Inserindo uma nova linha na tabela 'formulario' com os valores obtidos
    db.run(`INSERT INTO formulario(nome, email, celular, mensagem) VALUES(?, ?, ?, ?)`, [nome, email, celular, mensagem], function(err) {
      if (err) {
        return console.log(err.message); // Em caso de erro na inserção, imprime a mensagem de erro
      }
      console.log(`Uma linha foi inserida com a ID da linha ${this.lastID}`); // Se a linha foi inserida com sucesso, imprime a mensagem de sucesso
    });
  
    // Redireciona para a nova URL
    res.redirect('https://gabrielinnovation.github.io/gabriel_roque/');
});


