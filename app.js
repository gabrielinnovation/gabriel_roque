const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();

// Configura o Express para usar o body-parser como middleware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/formulario', (req, res) => {
  let db = new sqlite3.Database('./meuBancoDeDados.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conectado ao banco de dados.');
  });

  db.run(`INSERT INTO formulario(nome, email, celular, mensagem) VALUES(?, ?, ?, ?)`, [req.body.nome, req.body.email, req.body.celular, req.body.mensagem], function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Linha inserida ${this.lastID}`);
  });

  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
  });

  res.redirect('/obrigado');
});

app.get('/obrigado', (req, res) => {
  res.send('Obrigado por enviar o formulário!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
