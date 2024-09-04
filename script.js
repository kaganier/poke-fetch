let fetchButton = document.getElementById("fetch-button");
let characterInput = document.getElementById("poke-character");

 async function handleFetch() {
    console.log("hello from fetch");
    let character = "Caterpie";
    fetch(`https://pokeapi.co/api/v2/pokemon/caterpie`);
 }
        
        
        
        fetchButton.addEventListener("click", handleFetch);