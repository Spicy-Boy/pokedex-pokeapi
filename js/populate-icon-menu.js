//fills the icon-menu <secion> with flex-spaced poke-icon links
const iconMenu = document.getElementById("icon-menu");

//icon url
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"; //132.png would be ditto

for (let i = 1; i < 494; i++) //shows 151 pokemon
{
    let link = document.createElement("a");

    let currentUrl = window.location.href;

    // console.log("intitial url",currentUrl);
    //links to an entry.html with pokemon index as url parameter
    link.href=`entry.html?pokemon=${i}`;

    link.classList.add("icon");

    let img = new Image();
    img.src = baseUrl+i+".png"; //links to a github repo with all the pokemon icon sprites listed by index
    link.appendChild(img);

    iconMenu.appendChild(link);
}

// console.log(iconMenu);



