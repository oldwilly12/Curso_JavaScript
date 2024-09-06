let length;
let width;

//Crear funcion, y dar valores apartir de la entrada del usuario:

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    // for the string i needed to use `` to get the variable on the string is diferent to the single quote
    
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }