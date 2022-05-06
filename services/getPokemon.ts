export const getPokemon = async (url: string, query: string) => {
  const response = await fetch(`${url}${query}`)
  const data = await response.json();
  return data;
}