import './App.css';

function App() {

  const elemento = <h1 className="centrar-titulo">Hola mundo</h1>
  const elemento2 = suma(5, 5);
  return <div>
    <div>{elemento}</div>
    <div>{elemento2}</div>
  </div>

}

function suma(a, b) {
  return a + b
}

export default App;
