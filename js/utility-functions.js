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