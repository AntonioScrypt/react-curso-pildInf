import logo from './logo.svg';
import './App.css';
import { useRef } from "react";



function App() {

  const eurosRef = useRef();
  const resRef = useRef();

  const calculo = () => {
    const euroV = parseFloat(eurosRef.current.value);
    const dolarV = euroV * 1.08;

    resRef.current.innerHTML = dolarV.toFixed(2) + " $";
  }



  return (
    <div className='center-class'>
      <h1>Convertir Euro a dolar</h1>
      <input type='text' ref={eurosRef}></input><br/>
      <button onClick={calculo}>Convertir</button><br/>
      <p ref={resRef}></p>
      
    </div>
   
  );
}

export default App;
