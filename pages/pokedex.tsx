import NextHead from '../components/NextHead';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { PageLayout } from '../styles/styledComponents';
import PokeSelector from '../components/PokeSelector';
import { useContext } from 'react';
import pokemonContext from '../context/pokemonContext'
import PokemonContextProvider from '../context/PokemonContextProvider';
import PokeDisplay from '../components/PokeDisplay';
import Loading from '../components/Loading';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

interface PokemonsProps {
  pokemons: Object
}

export default function Pokedex({ pokemons }: PokemonsProps) {

  const { loading } = useContext(pokemonContext);

  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <PokemonContextProvider>
      <PageLayout flexDirection='row'>
        <NextHead title='Pokedex' />
        <PokeSelector pokemons={pokemons} />
        <PokeDisplay />
      </PageLayout>
    </PokemonContextProvider>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.graphcdn.app/',
    cache: new InMemoryCache()
  });

  const gqlVariables = {
    limit: 50,
    offset: 0,
  };

  const { data } = await client.query({
    query: gql`
    query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit , offset: $offset) {
        results {
          url
          name
          image
        }
      }
    }
  `, variables: gqlVariables,
  },);

  console.log('data', data);

  return {
    props: {
      pokemons: data.pokemons.results,
    }
  }
}
