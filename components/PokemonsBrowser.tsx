import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import getPokemons, { Pokemon } from 'api/pokemons/getPokemons';

interface PokemonBrowserBag {
  total: number,

  limit: number,
  setLimit: Dispatch<SetStateAction<number>>,

  currentPage: number,
  setPage: Dispatch<SetStateAction<number>>,

  loading: boolean,
  error?: Error,
}

function usePokemonsBrowser({
  initialLimit = 10,
  initialPage = 0,
}): [Pokemon[], PokemonBrowserBag] {
  const [total, setTotal] = useState(800);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const [limit, setLimit] = useState(initialLimit);
  const [currentPage, setPage] = useState(initialPage);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    setLoading(true);
    const offset = currentPage * limit;

    getPokemons({
      limit,
      offset,
    })
      .then(({
        total,
        pokemons,
      }) => {
        setTotal(total)
        setPokemons(pokemons);
      })
      .catch((error: Error) => {
        setError(error)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [limit, currentPage])

  return [pokemons, {
    total,

    limit,
    setLimit,

    currentPage,
    setPage,

    loading,
    error,
  }];
}

export default function PokemonsBrowser(): JSX.Element {
  const [pokemons, {
    total,
  }] = usePokemonsBrowser({});

  return (
    <div>
      PokemonsBrowser

      <div>
        total: {total}
      </div>
      <ul>
        {pokemons.map(({ id, name }) => (
          <li key={id}>
            <div>
              id: {id}
            </div>
            <div>
              name: {name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
