import './App.css';
import lixeira from '../assets/lixo.svg';
import api from '../services/api';
import React from 'react';
import Input from '../Components/Input';

function App() {
  const [users, setUsers] = React.useState([]);

  const [id, setId] = React.useState('');
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [editar, setEditar] = React.useState(false);

  async function getUsers() {
    const getUserApi = await api.get('/usuarios');
    setUsers(getUserApi.data);
  }

  async function createUsers(id) {
    console.log(editar);
    if (!editar) {
      await api.post('/usuarios', {
        name: name,
        age: age,
        email: email,
      });
    } else {
      await api.put(`/usuarios/${id}`, {
        name: name,
        age: age,
        email: email,
      });
      setEditar(false);
    }

    setName('');
    setAge('');
    setEmail('');
    getUsers();
  }

  async function deleteUsers(id) {
    console.log(id);
    await api.delete(`/usuarios/${id}`);

    getUsers();
  }

  async function putUsers({ id, name, age, email }) {
    setId(id);
    setName(name);
    setAge(age);
    setEmail(email);
    setEditar(true);
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form className="cadastro">
        <h1>Cadastro de usuario</h1>
        <Input
          placeholder="Nome"
          name="nome"
          type="text"
          value={name}
          setValue={setName}
        />
        <Input
          placeholder="Idade"
          name="idade"
          type="text"
          value={age}
          setValue={setAge}
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          value={email}
          setValue={setEmail}
        />
        {editar ? (
          <button type="button" onClick={() => createUsers(id)}>
            Editar
          </button>
        ) : (
          <button type="button" onClick={createUsers}>
            Cadastrar
          </button>
        )}
      </form>
      {users.map((user) => {
        return (
          <div className="usuario" key={user.id}>
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age}</span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <button onClick={() => putUsers(user)}>EDITAR</button>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={lixeira} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
