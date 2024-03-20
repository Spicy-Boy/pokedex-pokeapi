let url = "https://pokeapi.co/api/v2/pokemon/"; //game data

const searchParams = new URLSearchParams(window.location.search);
let pokemonID = searchParams.get("pokemon");

//INITIALIZE DOM OBJECTS!
const iconSprite = document.getElementById('icon-sprite');
const pokeIndex = document.getElementById('poke-index');

const sprite = document.getElementById('sprite');
// const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');
const classification = document.getElementById('classification');
const type = document.getElementById('type');

//get the pokemon's pokedex index from url parameter called "pokemon" vvv
console.log("Search parameter value: ", searchParams.get("pokemon"));

fetch(url+pokemonID)
.then(json => json.json() )
.then( obj => {

    console.log(obj.name);
    console.log(obj);

    //inside entry-header 
    iconSprite.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"+pokemonID+".png";
    pokeIndex.textContent = "#"+pokemonID+"  "+capitalizeFirstLetter(obj.name);

    //inside entry-animated
    //fetched img, name, and type
    let spriteUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/"+pokemonID+".gif"; //animated implied
    sprite.src = spriteUrl;
    name2.textContent = capitalizeFirstLetter(obj.name);

    //types arrive as an array of objects
    let types = obj.types;
    // console.log(types);
    types.forEach( (e,i) => {
        // console.log(e);
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

url = "https://pokeapi.co/api/v2/pokemon-species/"

fetch(url+pokemonID)
.then(json => json.json() )
.then( obj => {
    console.log("Genera:",obj.genera[7].genus);
    classification.textContent = obj.genera[7].genus;
});