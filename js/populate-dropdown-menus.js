let kantoDropdown = document.getElementById("kanto-dropdown");

/* <option value="1">001 Bulbasaur</option> */

// FETCH a list of pokemon from kanto (1 - 151)!
const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
fetch(url)
.then(json => json.json() )
.then( obj => {
    for (let i = 0; i < obj.results.length; i++)
    {
        let option = document.createElement("option");
        option.value = i+1;
        option.innerText = createDigitString(option.value)+" "+capitalizeFirstLetter(obj.results[i].name);

        kantoDropdown.appendChild(option);
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

