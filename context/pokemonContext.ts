import { createContext } from 'react';

interface IPokemons {
  pokemon: any;
  setPokemon: any;
  setPokeName: any;
  loading: boolean;
}

const pokemonContext = createContext<IPokemons>({} as IPokemons);

export default pokemonContext;