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




// EXERCISE 1
// Write a function named squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
function squareNumber(number){
    var result;
    result = number * number;
    console.log(`The result of squaring the number ${number} is ${result}.`);
    return result;
}
squareNumber(3);




// EXERCISE 2
// Write a function named halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
function halfNumber(a){
    var result 
    result = a / 2;
    console.log(`Half of ${a} is ${result}.`);
    return result;
}
halfNumber(5);


// EXERCISE 3
// Write a function named percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

function percentOf(b,c){
    var result
    result = b * 100 / c;
    console.log (`${b} is ${result}% of ${c}`);
    return result;
};
percentOf(2,4);



// EXERCISE 4
// Write a function named areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//      Bonus: Round the result so there are only two digits after the decimal.

const p = 3.14159265359;
function areaOfCircle(r){
    var result;
    result = p * r * r;
    console.log(`The area for a circle with radius ${r} is ${result.toFixed(2)}`);
    return result

};
areaOfCircle(2);



// EXERCISE 5
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier
//      1. Take half of the number and store the result.
//      2. Square the result of #1 and store that result. 
//      3. Calculate the area of a circle with the result of #2 as the radius.   
//      4. Calculate what percentage that area (#3) is of the squared result (#2).
function mathIsHard(n){
    var result1,result2,area,percentage;
    result1 = n / 2;
    result2 = result1 * result1; 
    area = result2 * result2 * p;
    percentage = result2 * 100 / area;
    console.log(`1.${result1}
2.${result2} 
3.${area} 
4.${percentage}%`);
    return result1,result2,area,percentage;
};
mathIsHard(4);