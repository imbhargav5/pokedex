import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'
const { results } = data;

function Pokemon(props) {
  const { pokemonName, pokemonIndex } = props;
  return <li>
    <img style={{ "height": 60, "width": 60 }} src={"/sprites/" + pokemonIndex + ".png"} /><span>{pokemonName}</span>
  </li>
}


const pokemonNames = results.map(obj => obj.name);
const pokemonNameIndexMap = {}

pokemonNames.forEach((pokemonName, index) => {
  pokemonNameIndexMap[pokemonName] = index + 1
})


function Pokedex() {


  const [value, setValue] = useState("");
  const filteredPokemonNames = pokemonNames.filter(pokemonName => pokemonName.includes(value))
  const elements = filteredPokemonNames.map((pokemonName, index) => <Pokemon key={pokemonName} pokemonIndex={pokemonNameIndexMap[pokemonName]} pokemonName={pokemonName} />)
  return <div>
    <h1> PokeDex</h1>
    <input value={value} onChange={(event) => {
      setValue(event.target.value)
    }} />
    <ol>
      {elements}
    </ol>
  </div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn Pokedex
        </p>
        <Pokedex />
      </header>
    </div>
  );
}

export default App;
