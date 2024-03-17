//fills the icon-menu <secion> with flex-spaced poke-icon links
const iconMenu = document.getElementById("icon-menu");

//icon url
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"; //132.png would be ditto

for (let i = 1; i < 152; i++) //shows 151 pokemon
{
    let link = document.createElement("a");

    let currentUrl = window.location.href;

    //directly modifies url to replace index.html with entry.html targeting index of pokemon
    console.log("intitial url",currentUrl);
    link.href=`entry.html?pokemon=${i}`;
    console.log("2nd url",currentUrl);

    link.classList.add("icon");

    let img = new Image();
    img.src = baseUrl+i+".png";
    link.appendChild(img);

    iconMenu.appendChild(link);
}

// console.log(iconMenu);



