// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 27
// This file contains the JS functions for index.html

// Check which radio button is selected

// Check if user has selected both radio buttons
if (isPositive && isNegative) {
  document.getElementById("answer").innerHTML = "Please select only one option."
  // Check if user has not selected any radio buttons
} else if (!(isPositive && isNegative)) {
  document.getElementById("answer").innerHTML = "Please select an option."
}

/*
 * This function generates a random number beatween -6 and 6 (excluding 0)
 */
function generateNumber() {
  // declare variables
  let randomNumber

  // Check which radio button the user has selected.
  const isPositive = document.getElementById("option-1").checked
  const isNegative = document.getElementById("option-2").checked

  // Generate random number based on user's input
  if (isPositive == true) {
    randomNumber = Math.floor(Math.random() * 6) + 1
    // Output number to user
    document.getElementById("answer").innerHTML = "The number is: " + randomNumber
    // returns a random integer from 1 to 6 into variable "randomNumber"
  } else if (isNegative == true){
    randomNumber = Math.floor(Math.random() * 6) - 6
    // Output number to user
    document.getElementById("answer").innerHTML = "The number is: " + randomNumber
    // returns a random integer from -6 to -1 into variable "randomNumber"
  }
}
