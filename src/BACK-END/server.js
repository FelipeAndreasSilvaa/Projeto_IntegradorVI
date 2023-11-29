const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'projeto_integrador',
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

app.get('/livros', (req, res) => {
  db.query('SELECT * FROM livros', (err, results) => {
    if (err) {
      console.error('Erro ao obter livros do MySQL:', err);
      res.status(500).json({ error: 'Erro interno ao obter livros.' });
    } else {
      res.json({ livros: results });
    }
  });
});


app.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  // Inicie uma transação
  db.beginTransaction((err) => {
    if (err) {
      console.error('Erro ao iniciar transação', err);
      res.status(500).json({ error: 'Erro interno ao cadastrar usuário' });
      return;
    }

    // Obtenha o próximo ID disponível
    const getNextUserIdQuery = 'SELECT MAX(id) + 1 as nextUserId FROM usuarios';
    db.query(getNextUserIdQuery, (err, result) => {
      if (err) {
        console.error('Erro ao obter próximo ID do usuário', err);

        // Faça rollback se ocorrer um erro
        db.rollback(() => {
          res.status(500).json({ error: 'Erro interno ao cadastrar usuário' });
        });
        return;
      }

      const nextUserId = result[0].nextUserId || 1; // Se não houver usuários ainda, comece com 1

      // Insira o usuário com o ID e user_id específicos
      const insertUserQuery = 'INSERT INTO usuarios (id, user_id, nome, email, senha) VALUES (?, ?, ?, ?, ?)';
      db.query(insertUserQuery, [nextUserId, nextUserId, nome, email, senha], (err, result) => {
        if (err) {
          console.error('Erro ao cadastrar usuário', err);

          // Faça rollback se ocorrer um erro
          db.rollback(() => {
            res.status(500).json({ error: 'Erro interno ao cadastrar usuário' });
          });
        } else {
          // Faça commit se a inserção for bem-sucedida
          db.commit((err) => {
            if (err) {
              console.error('Erro ao realizar commit', err);
              res.status(500).json({ error: 'Erro interno ao cadastrar usuário' });
            } else {
              console.log('Usuário cadastrado com sucesso');
              res.status(200).json({ success: true });
            }
          });
        }
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
  db.query(query, [email, senha], (err, result) => {
    if (err) {
      console.error('Erro no servidor ao verificar usuário:', err);
      res.status(500).json({ success: false, message: 'Erro no servidor' });
    } else {
      if (result.length > 0) {
        console.log('Login bem-sucedido para:', email, senha);
        res.json({ success: true, message: 'Login bem-sucedido' });
      } else {
        console.log('Credenciais inválidas para:', email, senha);
        res.json({ success: false, message: 'Credenciais inválidas' });
      }
    }
  });
});




app.listen(PORT, () => {
  console.log(`Servidor Node.js em execução em http://localhost:${PORT}`);
});
