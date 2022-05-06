import Image from 'next/image';
import { PageLayout, Rotate } from '../styles/styledComponents';
import pokeballSvg from '../public/assets/pokeball.svg';

export default function Loading() {
  return (
    <PageLayout flexDirection='column'>
      <Rotate>
        <Image src={pokeballSvg} layout='intrinsic' alt='' />
      </Rotate>
    </PageLayout>
  )
}