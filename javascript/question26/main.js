<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<body>

<h1>Simple Calculator Results</h1>
<div id="results"></div>

<script>
    // Declaring variables to store two numbers and the result
    let num1 = 10;
    let num2 = 5;
    let result;

    // Creating a string to store the results
    let resultsMessage = "";

    // Performing addition
    result = num1 + num2;
    console.log("Addition: " + num1 + " + " + num2 + " = " + result);
    resultsMessage += "Addition: " + num1 + " + " + num2 + " = " + result + "<br>";

    // Performing subtraction
    result = num1 - num2;
    console.log("Subtraction: " + num1 + " - " + num2 + " = " + result);
    resultsMessage += "Subtraction: " + num1 + " - " + num2 + " = " + result + "<br>";

    // Performing multiplication
    result = num1 * num2;
    console.log("Multiplication: " + num1 + " * " + num2 + " = " + result);
    resultsMessage += "Multiplication: " + num1 + " * " + num2 + " = " + result + "<br>";

    // Performing division
    result = num1 / num2;
    console.log("Division: " + num1 + " / " + num2 + " = " + result);
    resultsMessage += "Division: " + num1 + " / " + num2 + " = " + result + "<br>";

    // Displaying the results using innerHTML
    document.getElementById("results").innerHTML = resultsMessage;

