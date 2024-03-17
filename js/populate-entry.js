const url = "https://pokeapi.co/api/v2/pokemon/";

const searchParams = new URLSearchParams(window.location.search);

//INITIALIZE DOM OBJECTS!
const sprite = document.getElementById('sprite');
const pokeName = document.getElementById('name');
const type = document.getElementById('type');

//get the pokemon's pokedex index from url parameter called "pokemon" vvv
console.log("Search parameter value: ", searchParams.get("pokemon"));
let pokemonID = searchParams.get("pokemon")
fetch(url+pokemonID)
.then(json => json.json() )
.then( obj => {

    console.log(obj.name);
    console.log(obj);

    //fetched img, name, and type
    let spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+pokemonID+".gif" //animated implied
    sprite.src = spriteUrl;
    pokeName.textContent = capitalizeFirstLetter(obj.name);

    //types arrive as an array of objects
    let types = obj.types;
    console.log(types);
    types.forEach( (e,i) => {
        console.log(e);
        if (i == 0)
        {
            type.textContent = "Type: "+capitalizeFirstLetter(e.type.name);
        }
        else
        {
            type.textContent += ", "+capitalizeFirstLetter(e.type.name);
        }

    });

});