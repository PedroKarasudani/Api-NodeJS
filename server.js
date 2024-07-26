import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get('/usuarios', (req, res) => {
  res.status(200).json(users);
});

app.post('/usuarios', async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });
  res.status(201).json(req.body);
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
