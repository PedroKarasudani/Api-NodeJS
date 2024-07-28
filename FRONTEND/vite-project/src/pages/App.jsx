import './App.css';
import lixeira from '../assets/lixo.svg';
import api from '../services/api';
import React from 'react';

function App() {
  const [users, setUsers] = React.useState([]);

  const inputName = React.useRef();
  const inputAge = React.useRef();
  const inputEmail = React.useRef();

  async function getUsers() {
    const getUserApi = await api.get('/usuarios');
    setUsers(getUserApi.data);
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value,
    });
  }

  React.useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form className="cadastro">
        <h1>Cadastro de usuario</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="text" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
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
            <button>
              <img src={lixeira} />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
