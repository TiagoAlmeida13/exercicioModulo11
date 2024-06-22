// src/List.js
import React, { useState, useEffect } from 'react';

function List() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        // Recuperar os Pokémons do localStorage
        const storedPokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
        setPokemons(storedPokemons);
    }, []);

    const removePokemon = (indexToRemove) => {
        const updatedPokemons = pokemons.filter((_, index) => index !== indexToRemove);
        setPokemons(updatedPokemons);
        localStorage.setItem('pokemons', JSON.stringify(updatedPokemons));
    };

    return (
        <div>
            <h2>Lista de Pokémons Cadastrados</h2>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <strong>Nome:</strong> {pokemon.name}, <strong>Tipo:</strong> {pokemon.type}, <strong>Nível:</strong> {pokemon.level}
                        <button onClick={() => removePokemon(index)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;

