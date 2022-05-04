import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import Header from '../components/Header';
import NextHead from '../components/NextHead';
import Link from 'next/link';
import { PageLayout, LoginLayout, InputLayout, ButtonLayout, Rotate } from '../styles/styledComponents';
import pokeballSvg from '../public/assets/pokeball.svg';

const Home: NextPage = () => {

  const [email, setEmail] = useState('');

  const isEmailValid = (emailCheck: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailCheck);
  const disabled = isEmailValid(email);

  return (
    <PageLayout>
      <NextHead title='Login' />
      <Header />
      <LoginLayout>
        <Rotate>
          <Image src={pokeballSvg} layout='intrinsic' alt='' />
        </Rotate>
        <InputLayout
          type='email'
          value={ email }
          placeholder='Seu melhor e-mail'
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      <Link href='/pokedex'>
        <ButtonLayout
            type='button'
            disabled={ !disabled }
          >
            Entrar
          </ButtonLayout>
      </Link>
      </LoginLayout>
    </PageLayout>
  )
}

export default Home;
