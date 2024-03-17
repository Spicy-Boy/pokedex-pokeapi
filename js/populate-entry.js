const url = "https://pokeapi.co/api/v2/pokemon/";

const searchParams = new URLSearchParams(window.location.search);

//get the pokemon's pokedex index from url parameter called "pokemon" vvv
console.log("Search parameter value: ", searchParams.get("pokemon"));
fetch(url+searchParams.get("pokemon"))
.then(json => json.json() )
.then( obj => {

    console.log(obj.name);
    console.log(obj);

});