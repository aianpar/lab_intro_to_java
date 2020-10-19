//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = 'Taxi Driver';
let newGeoLoc = 'Toronto';
let annualSalary = 120000;
let companyName = "Uber";
let monthlySalary = annualSalary / 12;
console.log (`You will be ${jobTitle} in ${newGeoLoc}, making $${annualSalary}($${monthlySalary} per month) for ${companyName}.`);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the console like so: "They are NN years old.", substituting the values.

let currentYear = '2020';
let birthYear = '2000';
let age = currentYear - birthYear;
console.log (`They are ${age} years old.`);

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the console like so: "You will need NN to last you until the ripe old age of X".

let currentAge = 20;
let maxAge = 27;
let supplyPerDay = 4;
let lifetimeSupply = (maxAge - currentAge) * supplyPerDay * 365;
console.log (`You will need ${lifetimeSupply} cans to last you until the ripe old age of ${maxAge}`);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

var radius = 4;
let circumference = radius * 3.14 * 2;
console.log (`Circumeference is ${circumference}`);
let area = radius * radius * 3.14;
console.log (`area is ${area}`);

//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 12;
let fahrenheitTemp = (celsiusTemp * 9 / 5)+32;
console.log (`${celsiusTemp}°C is ${fahrenheitTemp}°F`);
let farTemp = 53.6;
let celTemp = (farTemp - 32) * 5 / 9;
console.log (`${farTemp}°F is ${celTemp}°C`);





