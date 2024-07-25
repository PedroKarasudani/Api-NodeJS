import express from 'express';

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('ok, deu bom');
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
