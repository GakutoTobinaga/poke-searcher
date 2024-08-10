import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const randomInt = Math.floor(Math.random() * 1010)
        console.log(randomInt)
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt}`);
        setPokemon({
          name: response.data.name,
          imageUrl: response.data.sprites.front_default
        });
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };

    fetchPokemon();
  }, []);
  return (
    <div>
      {pokemon && (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
        </>
      )
      }
    </div>
  );
};

export default Pokemon;
