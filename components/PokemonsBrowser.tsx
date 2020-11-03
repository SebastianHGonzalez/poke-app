import React from 'react'

import usePokemonsBrowser from 'hooks/usePokemonsBrowser'

export default function PokemonsBrowser(): JSX.Element {
  const [pokemons, { total }] = usePokemonsBrowser({})

  return (
    <div>
      PokemonsBrowser
      <div>total: {total}</div>
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            <div>id: {id}</div>
            <div>name: {name}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
