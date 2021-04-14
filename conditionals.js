// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.

const x = 40;
const y = 75;
const number = (x | y >= 50 && x | y <= 90) ? true : false;
console.log(number);
// ANSWER: it prints true

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.

const n1 = 3;
const n2 = 73;
const n3 = 88;
const validNumber = (n1 >= 50 && n1 <= 90 | n2 >=50 && n2 <=90 | n3 >=50 && n3 <= 90);
if (validNumber === true) {
    console.log("True");
}  else {
    console.log("False");
 }



// 3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works. 
const a = 3;
const b = 73;
const c = 88;
let largestNumber;
//the condition
if(a >= b && a >= c) {
    largestNumber = a;
}
else if (b >= a && b >= c) {
    largestNumber = b;
}
else {
    largestNumber = c;
}
console.log("The largest number is " + largestNumber );
// ANSWER : it prints The largest number is 88

// 4. Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.

const phrase = "Rates are too high";
const newPhrase = "Py" + "phrase";
if (newPhrase.startsWith("Py")){
    console.log(phrase);
}
// ANSWER: it prints "Rates are too high"

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 

const num1 = 75;
const num2 = 3;
const sum = num1 + num2;
if (sum >= 50 && sum <= 90) {
    console.log(65)
} else {
  console.log(80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.

const int1 = 2;
const int2 = 6;
const total = int1 + int2;
if (total === 8) {
    console.log("true");
}

// ANSWER: it prints true

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 

const intA = 12;
const intB = 3;

if(intA === 15 || intB === 15 && intA + intB === 15);{
	   console.log(true);	
   }
// ANSWER : it prints true

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.

const d = 14;
const e = 49;

if (d % 7 === 0 || d % 11 === 0 || e % 7 === 0 || e % 11 === 0) { console.log(true);
}

// ANSWER: it prints true

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

const givenNum1 = 77;
const givenNum2 = 32;
const givenSum = givenNum1 + givenNum2;
if (givenNum1 === givenNum2) {
    console.log(givenSum * 3);
}

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

const specifiedNum = 37;
const diff = specifiedNum - 19;
if (specifiedNum > 19){
    console.log(diff*3);
}
// ANSWER it prints 54


// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 




// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
