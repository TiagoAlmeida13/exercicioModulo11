// src/Register.js
import React, { useState } from 'react';

function Register() {
    const [pokemon, setPokemon] = useState({
        name: '',
        type: '',
        level: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPokemon((prevPokemon) => ({
            ...prevPokemon,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Recuperar a lista atual de pokémons do localStorage
        const storedPokemons = JSON.parse(localStorage.getItem('pokemons')) || [];
        // Adicionar o novo pokémon à lista
        storedPokemons.push(pokemon);
        // Atualizar o localStorage
        localStorage.setItem('pokemons', JSON.stringify(storedPokemons));
        console.log('Pokémon cadastrado:', pokemon);
        // Resetar o formulário
        setPokemon({
            name: '',
            type: '',
            level: '',
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={pokemon.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="type">Tipo:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    value={pokemon.type}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="level">Nível:</label>
                <input
                    type="number"
                    id="level"
                    name="level"
                    value={pokemon.level}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Cadastrar Pokémon</button>
        </form>
    );
}

export default Register;
