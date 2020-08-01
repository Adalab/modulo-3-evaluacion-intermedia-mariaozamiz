import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

function PokeList(props) {
    const items = props.pokemons.map((pokemon) => {
        return (
            <li key={pokemon.id} className="pokemon-card">
                <Pokemon
                    name={pokemon.name}
                    url={pokemon.url}
                    typesList={pokemon.types}
                />
            </li>
        );
    });

    return <ul className="pokemon-list">{items}</ul>;
}

PokeList.propTypes = {
    pokemons: PropTypes.array
  };

export default PokeList;
