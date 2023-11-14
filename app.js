fetch(`https://rickandmortyapi.com/api/character/`)
  .then((response) => response.json())
  .then((data) => data.results.forEach((character) => console.log(character.name)));

  