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

//if 1, turn into 001, if 10, turn into 010
function createDigitString(i)
{
    let numString = String(i);
    if (numString.length == 1)
    {
        numString = "00"+numString;
    }
    else if(numString.length == 2)
    {
        numString = "0"+numString;
    }
    return numString;
}   

function capitalizeFirstLetter(string)
{
    let newString = string.slice(0,1).toUpperCase()+string.slice(1);
    return newString;
}