/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from 'react';
import pokemonContext from '../context/pokemonContext';
import { Box, PokeDisplayLayout, Title, Wrapper, Text, DisplayWrapper, TextBox } from '../styles/styledComponents';
import Loading from './Loading';

export default function PokeDisplay() {

  const { pokemon, loading } = useContext(pokemonContext);

  const frontDefault = pokemon.sprites?.front_default;
  const frontShiny = pokemon.sprites?.front_shiny;


  if(loading) {
    return (
      <Loading />
    )
  }

  return (
    <PokeDisplayLayout>
      <DisplayWrapper direction='column' wrapperMargin='0'>
        <Title margin='0 0 0.6em 0.2em'>{pokemon.name}</Title>
        <Box flexDirection='row' justifyContent='center'>
          <img src={frontDefault} alt={pokemon.name} />
        </Box>
        <Box flexDirection='row' justifyContent='space-around'>
            { pokemon.types?.map((ptype: any) =>
            <TextBox key={ptype} backgroundColor={ptype.type.name}>
              <Text>{ptype.type.name}</Text>
            </TextBox>) }
        </Box>
        <Wrapper wrapperMargin='0' direction='row' >
          <Box flexDirection='row' justifyContent='none'>
            <Text>Height: {(pokemon.height * 0.1).toFixed(1)}m</Text>
          </Box>
          <Box flexDirection='row' justifyContent='none'>
            <Text>Weight: {(pokemon.weight * 0.1).toFixed(1)}</Text>
          </Box>
        </Wrapper>
        <Box flexDirection='row' justifyContent='none'>
          {pokemon.stats?.map((stat: any) => <Text key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</Text>)}
        </Box>
      </DisplayWrapper>
      <DisplayWrapper direction='column' wrapperMargin='0'>
      <Title margin='0 0 0.6em 30%'>Shiny</Title>
        <Box flexDirection='row' justifyContent='center'>
          <img src={frontShiny} alt={pokemon.name} />
        </Box>
      </DisplayWrapper>
    </PokeDisplayLayout>
  )
}