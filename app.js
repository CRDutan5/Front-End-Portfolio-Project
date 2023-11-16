function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: "smooth" });
  }
}

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

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((character) => displayCharacterCard(character));
  })
  .catch((error) => console.error("Error fetching data:", error));