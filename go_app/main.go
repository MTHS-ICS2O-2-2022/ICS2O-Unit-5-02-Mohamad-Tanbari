// Copyright (c) 2023 Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 1

// This program generates a number from 6 to -6 (excluding 0)

package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	// Declare variables
	var randomNumber float64
	var answer string

	// Ask user for negative or positive number
	fmt.Println("What type of number do you want to generate? (n) negative or (p) positive?")
	fmt.Scanln(&answer) // get user input

	// Generate random seed for random number
	rand.Seed(time.Now().UnixNano())

	// Check which answer the user has chosen
	switch answer {
	case "p":
		randomNumber = float64(rand.Intn(6-1) + 1)
		fmt.Println("\nYour random number is: ", randomNumber)
	case "n":
		randomNumber = float64(rand.Intn(6-1)+1) * -1
		fmt.Println("\nYour random number is: ", randomNumber)
	default:
		fmt.Println("\nInvalid input")
	}

	fmt.Println("\nDone.")
}
