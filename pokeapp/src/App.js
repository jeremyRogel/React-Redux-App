import React from 'react';
import axios from 'axios';
import './App.css';

import PokemonList from "./components/PokemonList"

function App() {

  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res)
    })



  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;
