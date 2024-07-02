// #! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter First Number", type: "number", name: "firstNumber" },
    { message: "enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Exponention", "Sine", "Sine inverse", "Tan", "Tan inverse", "Cos", "Cos inverse"],
    },
]);
console.log(answer);
//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(answer.firstNumber / answer.secondNumber * 100);
}
else if (answer.operator === "Exponention") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "Sine") {
    function sinDegrees(degrees) {
        const radians = degrees * (Math.PI / 180);
        return Math.sin(radians);
    }
    const angleDegrees = answer.firstNumber;
    const sineValue = sinDegrees(angleDegrees);
    console.log(`sin(${angleDegrees} degrees) = ${sineValue}`);
}
else if (answer.operator === "Sine inverse") {
    function asinDegrees(value) {
        const radians = Math.asin(value);
        const degrees = radians * (180 / Math.PI);
        return degrees;
    }
    const sinValue = answer.firstNumber;
    const angleDegrees = asinDegrees(sinValue);
    console.log(`arcsin(${sinValue}) = ${angleDegrees} degrees`);
}
else if (answer.operator === "Tan") {
    function tanDegrees(degrees) {
        const radians = degrees * (Math.PI / 180);
        return Math.tan(radians);
    }
    const angleDegrees = answer.firstNumber;
    const tangentValue = tanDegrees(angleDegrees);
    console.log(`tan(${angleDegrees} degrees) = ${tangentValue}`);
}
else if (answer.operator === "Tan inverse") {
    function atanDegrees(value) {
        const radians = Math.atan(value);
        const degrees = radians * (180 / Math.PI);
        return degrees;
    }
    const tanValue = answer.firstNumber;
    const angleDegrees = atanDegrees(tanValue);
    console.log(`arctan(${tanValue}) = ${angleDegrees} degrees`);
}
else if (answer.operator === "Cos") {
    function cosDegrees(degrees) {
        const radians = degrees * (Math.PI / 180);
        return Math.cos(radians);
    }
    const angleDegrees = answer.firstNumber;
    const cosineValue = cosDegrees(angleDegrees);
    console.log(`cos(${angleDegrees} degrees) = ${cosineValue}`);
}
else if (answer.operator === "Cos inverse") {
    function acosDegrees(value) {
        const radians = Math.acos(value);
        const degrees = radians * (180 / Math.PI);
        return degrees;
    }
    const cosValue = answer.firstNumber;
    const angleDegrees = acosDegrees(cosValue);
    console.log(`arccos(${cosValue}) = ${angleDegrees} degrees`);
}
else {
    console.log("Thank's for using our SCIENTIFIC CALCULATOR 😊");
}
