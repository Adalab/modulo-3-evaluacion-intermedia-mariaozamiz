import React from 'react';

function Pokemon(props) {
    return (
        <div>
            <div className="pokemon-image__frame">
                <img src={props.url} alt={`${props.name}-pic`} />
            </div>
            <div className="pokemon-name__frame">
                <h2>{props.name}</h2>
            </div>
            <div className="pokemon-type__frame">
                <span>{props.type}</span>
            </div>
        </div>
    );
}

export default Pokemon;
