/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getPokemon } from '../services/getPokemon';
import pokemonContext from './pokemonContext';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

function PokemonContextProvider({ children }: any) {

  const [pokemon, setPokemon] = useState([]);
  const [pokeName, setPokeName] = useState('bulbasaur');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchFirstPokemon = async (name: string) => {
      const result = await getPokemon(API_URL, name);
      setPokemon(result);
    };
    fetchFirstPokemon('bulbasaur');
    setLoading(false);
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async (name: string) => {
      const result = await getPokemon(API_URL, name);
      setPokemon(result);
    };
    fetchPokemon(pokeName)
    setLoading(false);
  }, [pokeName]);

  const context: any = {
    pokemon,
    setPokemon,
    pokeName,
    setPokeName,
    loading,
  }

  return (
    <pokemonContext.Provider value={ context }>
      { children }
    </pokemonContext.Provider>
  )
}

export default PokemonContextProvider;