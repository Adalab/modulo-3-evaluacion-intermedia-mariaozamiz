import React from 'react';
import Pokemon from './Pokemon';

function PokeList(props) {
    const items = props.pokemons.map((pokemon, index) => {
        return (
            <li className="pokemon-card" key={index}>
                <Pokemon
                    name={pokemon.name}
                    url={pokemon.url}
                    type={pokemon.types.join('/')}
                />
            </li>
        );
    });

    return <ul className="pokemon-list">{items}</ul>;
}
export default PokeList;
