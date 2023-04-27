// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: April 27
// This file contains the JS functions for index.html

// Check which radio button is selected
const isPositive = document.getElementById("positive").checked
const isNegative = document.getElementById("negative").checked

// Define randomNumber
const randomNumber = 0

/*
 * This function generates a random number between -6 and 6 (excluding 0)
 */
function generateNumber() {
  // Generate random number based on user's input
  if ((isPositive = true)) {
    randomNumber = Math.floor(Math.random() * 6) + 1
    // returns a random integer from 1 to 6 into variable "randomNumber"
  } else {
    randomNumber = Math.floor(Math.random() * 6) - 6
    // returns a random integer from -6 to -1 into variable "randomNumber"
  }

  // Output random number to the user
  document.getElementById("answer").innerHTML = randomNumber

  // Check if user has selected both radio buttons
  if ((isPositive = true && isNegative)) {
    document.getElementById("answer").innerHTML =
      "Please select only one option."
  }

  // Check if user has not selected any radio buttons
  if ((isPositive = false && isNegative)) {
    document.getElementById("answer").innerHTML = "Please select an option."
  }
}
