import React, { Component, useState } from "react"
import GuessControl from "./GuessControl"
import GuessMessage from "./GuessMessage"
import GameOver from "./GameOver"

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

const MAX_ATTEMPTS = 5

const NumberGuessingGame = () => {

  const [numberToGuess, setNumberToGuess] = useState(getRandomNumber())
  let [numberOfGuesses, setNumberOfGuesses] = useState("")
  const [latestGuess, setLatestGuess] = useState("")

  const isCorrectGuess = latestGuess === numberToGuess
  const isGameOver = isCorrectGuess || numberOfGuesses === MAX_ATTEMPTS

  return (
    <div>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver && (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      )}
      {!isGameOver && (
        <GuessMessage
          guess={latestGuess}
          numberToGuess={numberToGuess}
          numberOfGuesses={numberOfGuesses}
        />
      )}
    </div>
  )

  function handleGuess(guess) {
    setLatestGuess(Number(guess))
    setNumberOfGuesses(Number(numberOfGuesses) + 1)
  }

  function handleReset() {
    setLatestGuess(null)
    setNumberOfGuesses(0)
    setNumberToGuess(getRandomNumber())
  }

}

export default NumberGuessingGame
