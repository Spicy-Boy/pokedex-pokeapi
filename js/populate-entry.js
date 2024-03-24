let url = "https://pokeapi.co/api/v2/pokemon/"; //game data api url

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

const entryLore = document.getElementById("entry-lore");

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

//second api call, the pokemon-species
url = "https://pokeapi.co/api/v2/pokemon-species/"

fetch(url+pokemonID)
.then(json => json.json() )
.then( obj => {
    console.log("Pokemon species data:",obj);
    // console.log("Genera:",obj.genera[7].genus);
    classification.textContent = obj.genera[7].genus;

    // console.log("flavor:", obj.flavor_text_entries);
    for (let i = 0; i < obj.flavor_text_entries.length; i++)
    {
        let entry = obj.flavor_text_entries[i];
        let previousEntryFlavor = "";
        // console.log(entry);
        // console.log(entry.version.name);
        if (entry.version.name == "ruby" ||
        entry.version.name == "sapphire" ||
        entry.version.name == "emerald" ||
        entry.version.name == "firered" ||
        entry.version.name == "leafgreen" ||
        entry.version.name == "diamond" ||
        entry.version.name == "pearl" ||
        entry.version.name == "platinum"
        ){
            
            let entryDiv = document.createElement('div');
            entryDiv.classList.add('lore-individual');

            let versionDiv = document.createElement('div');
            versionDiv.classList.add("lore-version");

            console.log(entry.version.name);
            let versionName = entry.version.name;
            console.log(versionName);

            versionName = versionName.replace(/\bred\b/g, "fffRed");
            versionName = versionName.replace(/\bgreen\b/g, "Green");
            console.log(versionName);

            versionDiv.innerText = capitalizeFirstLetter(entry.version.name);
            entryDiv.appendChild(versionDiv);

            let flavorDiv = document.createElement('div');
            let pFlavor = document.createElement('p');
            //regex to remove line breaks vvv
            entry.flavor_text = entry.flavor_text.replace(/\n/g, ' ');

            pFlavor.innerText = entry.flavor_text;
            flavorDiv.appendChild(pFlavor);
            flavorDiv.classList.add("loreFlavor");

            entryDiv.appendChild(flavorDiv);

            if (entry.flavor_text != previousEntryFlavor)
            {
                previousEntry = entry.flavor_text;
                entryLore.appendChild(entryDiv)
            }   
        }
    }
});