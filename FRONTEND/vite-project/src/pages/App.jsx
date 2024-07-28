import './App.css';
import lixeira from '../assets/lixo.svg';

function App() {
  const users = [
    { id: 1, name: 'pedro', age: '27', email: 'pedro@hotmail.com' },
    { id: 2, name: 'babis', age: '26', email: 'babis@hotmail.com' },
  ];

  return (
    <div className="container">
      <form className="cadastro">
        <h1>Cadastro de usuario</h1>
        <input placeholder="Nome" name="nome" type="text" />
        <input placeholder="Idade" name="idade" type="text" />
        <input placeholder="Email" name="email" type="email" />
        <button>Cadastrar</button>
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
