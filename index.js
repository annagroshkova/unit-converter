const input = document.querySelector('.value-input');
const inputButton = document.querySelector('.input-button');
const metersToFeet = document.querySelector('.metrics-conversion_meter-feet');
const litersToGallons = document.querySelector('.metrics-conversion_liters-gallons');
const kilosToPounds = document.querySelector('.metrics-conversion_kilograms-pounds');

function saveInput() {
  if (input.value !== '' && input.value !== '1') {
    metersToFeet.textContent = `${input.value} meters = ${(input.value * 3.28084).toFixed(3)} feet | ${input.value} feet = ${(input.value * 0.3048000097536).toFixed(3)} meters`
    litersToGallons.textContent = `${input.value} liters = ${(input.value * 0.264172).toFixed(3)} gallons | ${input.value} gallons = ${(input.value * 3.78541103373138).toFixed(3)} liters`
    kilosToPounds.textContent = `${input.value} kilos = ${(input.value * 2.20462).toFixed(3)} pounds | ${input.value} pounds = ${(input.value * 0.453592).toFixed(3)} kilos`
  }
}

 function resizeInput() {
   input.style.width = `${input.value.length * 42}px`;
 }
 inputButton.addEventListener('click', saveInput);
 input.addEventListener('input', resizeInput);



/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

/*
1 foot = 0,304 meters
1 gallon = 3,785 liters
1 pound = 0,453 kilograms
*/