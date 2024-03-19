let kantoDropdown = document.getElementById("kanto-dropdown");
let johtoDropdown = document.getElementById("johto-dropdown");
let hoennDropdown = document.getElementById("hoenn-dropdown");
let sinnohDropdown = document.getElementById("sinnoh-dropdown");

/* <option value="1">001 Bulbasaur</option> */

// FETCH a list of pokemon from first four regions (0-493)!
const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=493"; //493 pokemon in gen 4
fetch(pokemonListUrl)
.then(json => json.json() )
.then( obj => {
    for (let i = 0; i < obj.results.length; i++)
    {
        let option = document.createElement("option");
        option.value = i+1;
        option.innerText = createDigitString(option.value)+" "+capitalizeFirstLetter(obj.results[i].name);
        if (getRegionByID(i) == "k")
        {
            kantoDropdown.appendChild(option);
        }
        else if (getRegionByID(i) == "j")
        {
            johtoDropdown.appendChild(option);
        }
        else if (getRegionByID(i) == "h")
        {
            hoennDropdown.appendChild(option);
        }
        else if (getRegionByID(i) == "s")
        {
            sinnohDropdown.appendChild(option);
        }

    }
});

kantoDropdown.addEventListener("change", () => {
    let selectedValue = kantoDropdown.value;

    if (selectedValue != -1)
    {
        // console.log('SELECTION!');
        window.location.href = "entry.html?pokemon=" + encodeURIComponent(selectedValue);
    }
});
johtoDropdown.addEventListener("change", () => {
    let selectedValue = johtoDropdown.value;

    if (selectedValue != -1)
    {
        // console.log('SELECTION!');
        window.location.href = "entry.html?pokemon=" + encodeURIComponent(selectedValue);
    }
});
hoennDropdown.addEventListener("change", () => {
    let selectedValue = hoennDropdown.value;

    if (selectedValue != -1)
    {
        // console.log('SELECTION!');
        window.location.href = "entry.html?pokemon=" + encodeURIComponent(selectedValue);
    }
});
sinnohDropdown.addEventListener("change", () => {
    let selectedValue = sinnohDropdown.value;

    if (selectedValue != -1)
    {
        // console.log('SELECTION!');
        window.location.href = "entry.html?pokemon=" + encodeURIComponent(selectedValue);
    }
});

