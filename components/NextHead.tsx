import Head from 'next/head';

interface HeadProps {
  title: string;
}

export default function NextHead({ title }: HeadProps) {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="A pokedex web app!" />
    <link rel="shortcut icon" href="/favicon.svg" />
    </Head>
  )
}