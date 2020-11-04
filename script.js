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