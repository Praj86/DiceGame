# DiceGame
A simple dice game created with HTML, CSS, and JavaScript. This game allows two players to roll dice and displays the winner or if there’s a draw. The game can be refreshed by clicking the "Re-Roll" button, which generates new dice rolls each time.

# Dice Game 🎲

A simple, interactive dice game created using HTML, CSS, and JavaScript. This game simulates a two-player dice roll, displays the winner based on the dice values, or declares a draw if both players roll the same number. Refresh the game by clicking the "Re-Roll" button to try again!

## Demo

Play the game online [here](https://yourusername.github.io/DiceGame/).

## Table of Contents


- [How It Works](#how-it-works)
- [Code Overview](#code-overview)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Author](#author)


## How It Works

- Each time the "Re-Roll" button is clicked, both dice roll randomly.
- Random numbers (1 to 6) determine the dice images displayed for each player.
- The winner is displayed at the top based on the higher roll. If both rolls are equal, it displays "Draw!".

## Code Overview

- **`randomDice()` function**: Generates a random number between 1 and 6.
- **`randomDiceImage()` function**: Updates the dice images based on random numbers and displays the winner or if it’s a draw.
- **Event Listener for "Re-Roll" Button**: Calls `randomDiceImage()` to re-roll the dice.

## Customization

- Modify the images in the `/images` folder if you'd like different dice faces.
- Adjust colors or styles in `styles.css` to personalize the game's appearance.

## Technologies Used

- HTML
- CSS
- JavaScript

## Author

Created by [Praj86](https://github.com/Praj86).
