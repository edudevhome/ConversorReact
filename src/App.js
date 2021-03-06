import React from 'react';

import './App.css';
import Conversor from "./componentes/conversor"

function App() {
  return (
    <div className="App">
      <h1 id="titulo">Conversor de moedas</h1>
      <div className="linha">

        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>


      </div>

      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>

      </div>

      <div className="linha">
        <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="CAD"></Conversor>

      </div>


    </div>
  );
}

export default App;
