//fills the icon-menu <secion> with flex-spaced poke-icon links
const iconMenu = document.getElementById("icon-menu");

//icon url
let baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/"; //132.png would be ditto

for (let i = 1; i < 152; i++)
{
    let link = document.createElement("a");
    link.href = "https://www.serebii.net";
    let img = new Image();
    img.src = baseUrl+i+".png";
    link.appendChild(img);
    iconMenu.appendChild(link);
}

console.log(iconMenu);



