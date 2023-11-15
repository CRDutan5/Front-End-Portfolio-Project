// fetch(`https://rickandmortyapi.com/api/character/`)
//   .then((response) => response.json())
//   .then((data) => data.results.forEach((character) => console.log(character.name)));

fetch('https://rickandmortyapi.com/api/character')
.then((response) => response.json())
.then((data) => {
  const characters = data.results.map((e) => ({
    name: e.name,
    species: e.species,
    status: e.status,
    origin: e.origin.name,
    gender: e.gender,
    lastSeen: e.location.name
  }));
  console.log(characters);
});


// .then((data) => data.results.map((e) => console.log(`${e.name} ${e.species} ${e.status} ${e.origin.name} ${e.gender} ${e.location.name}`)))

// .then((data) => data.results.map((e) => {
//   e.name,
//   e.species,
//   e.status,
//   e.origin.name
// }));
// .then((data) => data.results.forEach((e) => ))