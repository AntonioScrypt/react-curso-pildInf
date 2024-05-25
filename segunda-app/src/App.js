import './App.css';
import React, {useState} from 'react';


function App() {

  const [res, setRes] = useState(null)

  const elemento = <h1 className="centrar-titulo">Hola mundo</h1>
  //const elemento2 = <div>{suma(5, 5)}</div>

  const botonPulsado = () => {
    const result = suma(7, 5);
    setRes(result)
  } 

  return <div>
    <button onClick={botonPulsado} style={{marginTop:"10px", marginLeft: "10px"}}>Pulsame</button>
    <div>{elemento}</div>
    <div>{res != null && <h2>El resultado es: {res}</h2>}</div>
  </div>

}

function suma(a, b) {
  return a + b
}

export default App;
