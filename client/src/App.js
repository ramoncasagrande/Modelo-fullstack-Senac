import React, { useState, useEffect } from 'react';
import senac from './Senac_logo.png';
import './App.css';

function App() {

  const [ nomes, setNomes ] = useState([]);

  async function fetchNomes() {
    const response = await fetch("http://localhost:3001/");
    setNomes(await response.json());
  }

  useEffect(() => {
    fetchNomes();
  }, [nomes]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={senac} className="App-logo" alt="logo" />
        <p>
          {nomes} = 1º Ano SENAC!
        </p>
      </header>
    </div>
  );
}

export default App;
