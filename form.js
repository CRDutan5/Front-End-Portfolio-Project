const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="option"]:checked');
    section.innerHTML = "";
    console.log(selectedOption.id);
    fetch(`https://rickandmortyapi.com/api/character/?status=${selectedOption.id}`)
    .then((response) => response.json())
    .then((data) => data.results.forEach((character) => displayCharacterCard(character)));
})