import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './loading';
const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setTimeout(async () => {
          const randomInt = Math.floor(Math.random() * 1010);
          console.log(randomInt);
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomInt}`);
          setPokemon({
            name: response.data.name,
            imageUrl: response.data.sprites.front_default
          });
          setLoading(false);
        }, 5000); // 5秒の遅延を追加
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return <Loading/>
  }

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
