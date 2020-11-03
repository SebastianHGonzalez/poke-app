module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemons',
        permanent: true,
      },
    ]
  },
}
