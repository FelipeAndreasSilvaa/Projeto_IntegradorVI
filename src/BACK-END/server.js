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

// const db = mysql.createConnection({
//   host: 'node161686-env-5181209.jelastic.saveincloud.net',
//   user: 'root',
//   port: '14852',
//   password: 'DXTrnb91160',
//   database: 'Projeto_integrador'
// });

const db = mysql.createConnection({
  host: 'node161687-env-8279702-review.jelastic.saveincloud.net',
  user: 'root',
  port: '14856',
  password: 'NHBfah67653',
  database: 'projeto_ia'
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

   db.query('select email, senha from usuarios where email = ? and senha = ?',
  [email, senha], (err, result) => {
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

 app.post('/livrosUser', (req, res) => {
  const { user_id, livro_id } = req.body;

  db.query('INSERT INTO livrosUser (user_id, livro_id) VALUES (?, ?)', [user_id, livro_id], (err, result) => {
      if (err) {
          console.log('Erro ao adicionar livro abandonado:', err);
          res.status(500).send('Erro ao adicionar livro abandonado');
      } else {
          res.json({ message: 'Livro adicionado aos abandonados com sucesso!' });
      }
  });
});

app.get('/livrosUser', (req, res) => {
  const { user_id } = req.query;

  db.query('SELECT livros.* FROM livrosUser JOIN livros ON livrosUser.livro_id = livros.id WHERE livrosUser.user_id = ?', [user_id], (err, result) => {
      if (err) {
          console.log('Erro ao obter livros:', err);
          res.status(500).send('Erro ao obter livros');
      } else {
          res.json({ livrosAbandonados: result });
      }
  });
});


app.post('/livrosPego', (req, res) => {
  // Define o valor fixo para user_id
  const fixedUserId = 'AF3X7J0XC391L';

  // Extrai os outros dados do corpo da requisição
  const { product_id, title, time, score } = req.body;

  // Cria a consulta SQL com user_id fixo
  const query = 'INSERT INTO livrosPego (product_id, user_id, title, score, time) VALUES (?, ?, ?, ?, ?)';

  // Define os valores para a consulta
  const values = [product_id, fixedUserId, title, score, time];

  // Executa a consulta no banco de dados
  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Erro ao adicionar livro pego:', err);
      res.status(500).send('Erro ao adicionar livro pego');
    } else {
      res.json({ message: 'Livro adicionado aos pegos com sucesso!' });
    }
  });
});

// app.post('/teste', verifyToken, (req,res)=>{
//   res.json('Informação secreta')
// })

// function verifyToken(req,res, next){
//   if(!req.headers.authorization) return res.status(401).json('No autorizado');

//   const token = req.headers.authorization.substr(7);
//   if(token!==''){
//     const content = jwt.verify(token,'stil');
//     req.data = content;
//     next();
//   }else{
//     res.status(401).json('Token vacio');
//   }

// }

app.listen(PORT, () => {
  console.log(`Servidor Node.js em execução em http://localhost:${PORT}`);
});
