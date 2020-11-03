interface PokemonsQueryVariables {
  limit: number
  offset: number
}

interface PokemonsQueryResult {
  total: number
  pokemons: Pokemon[]
}

export interface Pokemon {
  id: number
  name: string
}

export default function getPokemons({
  limit,
  offset,
}: PokemonsQueryVariables): Promise<PokemonsQueryResult> {
  return Promise.resolve({
    total: 42,
    pokemons: new Array(limit)
      .fill(null)
      .map((_, id) => ({ id: id + offset, name: `pokemon-${id + offset}` })),
  })
}
