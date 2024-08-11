//first question
var n = prompt("Enter A Number");
if(n <= 100){
    console.log('number is less than or equal to 100');
}else{
    console.log('number is greater than 100');
}
//second question
var text = prompt("Enter The Text");
if(text.length > 100){
    console.log("the string is long");
}else{
    console.log("string is short");
}
//third question
var pass = prompt("Enter Your Password");
if(pass == 1999){
    console.log("confirm password");
}else{
    console.log("no valied");
}
//fourth question
var day = prompt("Enter The Day");
if(day == "saturday"){
    console.log("It's weekend");
}else{
    console.log("work day");
}
//fivth question
var num = prompt("Enter a number");
if(num > 0){
    console.log("Positive");
}else{
    console.log("Negative");
}
//sixth question
var grades = prompt("Enter Your Grades");
if(grades < 50){
    console.log("F");
}else if(grades < 60){
    console.log("D");
}else if(grades < 70){
    console.log("C");
}else if(grades < 80){
    console.log("B");
}else{
    console.log("A");
}
//seventh question
var temp = prompt("Enter The Temprature");
if(temp > 30){
    console.log("it's hot");
}else{
    console.log("it's cold");
}
//eigth question
var number = prompt('Enter A Number');
if(number % 2 == 0){
    console.log('Even');
}else{
    console.log('Odd');
}
//ninth question
var numb = prompt("Enter A Number");
if(numb % 2 != 0 && number > 20){
    console.log(" You can enter the university");
}else{
    console.log(" You can't enter");
}