const section = document.querySelector(".character-cards");

function displayCharacterCard(character) {
  const newCard = document.createElement("article")
  newCard.classList.add("created-card");
  newCard.innerHTML = `
  <h2>${character.name}</h2>
  <img src = "${character.image}" alt = "Image of ${character.name}">
  <p>Species: ${character.species}</p>
  <p>Status: ${character.status}</p>
  <p>Origin: ${character.origin.name}</p>
  <p>Gender: ${character.gender}</p>
  <p>Last Seen: ${character.location.name}</p>
  `
  section.append(newCard);
}

// create a function that filters the characters from "dead", "alive" and "unknown"
// function characterStatusFilter(status, character){
//   if(status === "alive"){
//     console.log("i returned alive")

//   }
//   else if(status === 'dead'){
//     console.log('i returned dead');
//   }
//   else if(status === 'unknown'){
//     console.log('i returned unknown')
//   }
// }

// // then pass it into the form event listener


const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedOption = document.querySelector('input[name="option"]:checked');

  characterStatusFilter(selectedOption.id);
})


//run event listener outside of function then pass it in

//maybe event.target.option.value

function getCharacterByStatus(status) {
  fetch(`https://rickandmortyapi.com/api/character/?status=${status}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
}

// clear out cards by using inner.html = "empty string"

getCharacterByStatus('alive');




fetch("https://rickandmortyapi.com/api/character")
.then((response) => response.json())
.then((data) => {
  data.results.forEach((character) => displayCharacterCard(character));
})
.catch((error) => console.error("Error fetching data:", error));

