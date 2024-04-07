let length;
let width;
let height;

function calculateVolume() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    height = parseFloat(document.getElementById('height').value);
   
   let Volume = length * width * height;

   document.getElementById('result').innerText = `The volume of the rectangle is: ${Volume}`;
   }

  