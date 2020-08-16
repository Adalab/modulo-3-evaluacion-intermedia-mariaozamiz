import React from 'react';
import PropTypes from 'prop-types';

function Pokemon(props) {
    const renderTypes = () => {
        return props.typesList.map((pokemonType, index) => {
            return (
                <li key={index} className="pokemon-type">
                    {pokemonType}
                </li>
            );
        });
    };

    return (
        <div>
            <div className="pokemon-image__frame">
                <img src={props.url} alt={`foto de ${props.name}`} />
            </div>
            <div className="pokemon-name__frame">
                <h2>{props.name}</h2>
            </div>
            <ul className="pokemon-type__list">{renderTypes(props)}</ul>
        </div>
    );
}

Pokemon.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    typesList: PropTypes.array,
};

export default Pokemon;
