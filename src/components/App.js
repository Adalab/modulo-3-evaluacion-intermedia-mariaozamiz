import React, { useState } from 'react';
import '../stylesheets/App.css';
import PokeList from './Pokelist';
import pokemondata from '../data/pokemondata.json';

function App() {
    const [pokemons, setPokemons] = useState(pokemondata);
    return (
        <div className="App pokemon-list__container">
            <h1 className="app-title">Mi lista de pokemon</h1>
            <PokeList pokemons={pokemons} />
        </div>
    );
}

export default App;
