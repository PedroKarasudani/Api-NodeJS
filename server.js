import express from 'express';

const app = express();
app.use(express.json());

const users = []; // simula banco de dados

app.get('/usuarios', (req, res) => {
  res.status(200).json(users);
});

app.post('/usuarios', (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
});

app.listen(3000);

/* 
    1) Tipo de Rota / Método HTTP
    2) Endereco (http://localhost:3000/usuarios)
*/
/* 
    1) Listar todos os usuarioss
    2) Criar um usuario
    3) Editar um usuario
    4) Deletar um usuario
*/
