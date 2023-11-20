const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    section.innerHTML = "";
    fetch(`https://rickandmortyapi.com/api/character/?status=${selectedOption.id}`)
    .then((response) => response.json())
    .then((data) => data.results.forEach((character) => displayCharacterCard(character)));
})

const speciesForm = document.querySelector(".species-selection");

speciesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedSpecies = document.querySelector('input[name="option"]:checked');
    section.innerHTML = "";
    fetch(`https://rickandmortyapi.com/api/character/?species=${selectedSpecies.id}`)
    .then((response) => response.json())
    .then((data) => data.results.forEach((character) => displayCharacterCard(character)));
})

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.reset();
    speciesForm.reset();
    section.innerHTML = ""; 
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((character) => displayCharacterCard(character));
        })
        .catch((error) => console.error("Error fetching data:", error));
});

