let kantoDropdown = document.getElementById("kanto-dropdown");

kantoDropdown.addEventListener("change", () => {

    let selectedValue = kantoDropdown.value;

    if (selectedValue != -1)
    {
        console.log('SELECTION!');
        window.location.href = "entry.html?pokemon=" + encodeURIComponent(selectedValue);
    }
    
});