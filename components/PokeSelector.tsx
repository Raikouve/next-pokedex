import Image from 'next/image';
import { InputLayout, PokeSelectorLayout, Wrapper } from '../styles/styledComponents';
import logoPokedex from '../public/assets/logo-pokedex.png';
import { useContext, useState } from 'react';
import pokemonContext from '../context/pokemonContext';

interface PokeSelectorProps {
  pokemons: any;
}

interface ObjectProperties {
  name: string;
}

const NUMBER_ONE: number = 1;

export default function PokeSelector({ pokemons }: PokeSelectorProps) {

  const [search, setSearch] = useState('');
  const [pokemonSearch, setPokemonSearch] = useState('');

  const { setPokeName } = useContext(pokemonContext);

  const handleClick = (name: string) => {
    setPokeName(name)
  }

  return (
    <PokeSelectorLayout>
      <Wrapper direction='column' wrapperMargin='40em 0 0'>
        <Image src={logoPokedex} layout='intrinsic' alt='' />
        <p>Everything you wanted to know about yout favorite pocket monsters!</p>
        <InputLayout
          type='text'
          value={ search }
          placeholder='Search by name or number'
          onChange={ ({ target: { value } }) => setSearch(value) }
          inputWidth='2em'
          inputRadius='100%'
          inputMargin='2em 0'
        />
      </Wrapper>
      <ul>
        {pokemons.map(({ name }: ObjectProperties, index: number) =>
        <li
        key={name}
        onClick={() => handleClick(name)}
        >
          #{index + NUMBER_ONE} - {name}
        </li>
        )}
      </ul>
    </PokeSelectorLayout>
  )
}
