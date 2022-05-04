/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import pokeLogo from "../public/assets/logo-pokedex.png";
import pokeSettings from "../public/assets/settings.svg";
import { HeaderLayout } from "../styles/styledComponents";

export default function Header() {
  return (
    <HeaderLayout>
      <Image src={pokeLogo} alt="" width={200} height={50} />
      <Image src={pokeSettings} alt="" width={24} height={24} />
    </HeaderLayout>
  )
}