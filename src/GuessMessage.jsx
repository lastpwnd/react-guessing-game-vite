function getGuessMessage(guess, numberToGuess) {
  const distanceApart = Math.abs(numberToGuess - guess)
  if (guess < numberToGuess) {
    if (distanceApart > 25) {
      return "Your guess is well below the number"
    } else if (distanceApart <= 25 && distanceApart >= 4){
      return "Your guess is a little below the number"
    } else { 
      return "Your are close, but still below the number"
    }
  } else {
    if (distanceApart > 25) {
      return "Your guess is well above the number"
    } else if (distanceApart <= 25 && distanceApart >= 4){
      return "Your guess is a little above the number"
    } else  { 
      return "Your are close, but still above the number"
    }
  }
}

function GuessMessage({ guess, numberToGuess, numberOfGuesses }) {
  return (
    <div>
      {guess && <p>{getGuessMessage(guess, numberToGuess)}</p>}
      <p>Guesses so far: {numberOfGuesses ? numberOfGuesses : 0}</p>
    </div>
  );
}

export default GuessMessage