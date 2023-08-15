import React, { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import CordsInput from './components/CordsInput/CordsInput';
import OptionsForm from './components/OptionsForm/OptionsForm';
import StatusBar from './components/StatusBar/StatusBar';

const MAX_GUESSES = 32;
const BOARD_SIZE = 8;

let startingTime;
let badAttemptCounter;
let dailyTimeMillis = 30 * 1000 * 60 // 30 minutes



const randInt = (max) => Math.floor(Math.random() * max)

function App() {


  function toggleVisibilityOfCords() {
    setCordsVisibility(!cordsVisibility);
  }

  function selectRandomCord() {
    const cord = "abcdefgh".at(randInt(BOARD_SIZE)) + (randInt(BOARD_SIZE) + 1);
    setHighlightedCord(cord);
  }
  const [highlightedCord, setHighlightedCord] = useState("abcdefgh".at(randInt(BOARD_SIZE)) + (randInt(BOARD_SIZE) + 1));
  const [wrongCords, setWrongCords] = useState([]);
  const [cordsVisibility, setCordsVisibility] = useState(false);


  function handleCorrectGuess() {
    setWrongCords([]);
    selectRandomCord();
    setRemainingGuesses(remainingGuesses - 1);
  }

  function handleIncorrectGuess(value) {
    if (!wrongCords.includes(value)) {
      badAttemptCounter++;
      setWrongCords([...wrongCords, value]);
    }
  }

  function handleGuessCompletion() {
    const guessingTimeSpanMillis = Date.now() - startingTime;
    const speed = MAX_GUESSES / (guessingTimeSpanMillis / (1000 * 60));
    const accuracy = ((MAX_GUESSES - badAttemptCounter) / MAX_GUESSES) * 100;
    setStatus({
      guessingTimeSpanMillis: guessingTimeSpanMillis,
      speed: speed.toFixed(2), // cords per minute
      accuracy: accuracy.toFixed(2),
      score: (speed * accuracy).toFixed(2),
      progressValue: status.progressValue + guessingTimeSpanMillis / dailyTimeMillis * 100
    });
    setRemainingGuesses(MAX_GUESSES);
  }

  function checkGuess(value) {
    if (MAX_GUESSES === remainingGuesses) {
      startingTime = Date.now();
      badAttemptCounter = 0;
    }

    if (value === highlightedCord) {
      handleCorrectGuess();
    } else {
      handleIncorrectGuess(value);
    }

    if (remainingGuesses === 1) {
      handleGuessCompletion();
    }
  }




  const [isBoardRotated, setBoardRotation] = useState(false);

  const [remainingGuesses, setRemainingGuesses] = useState(MAX_GUESSES);
  const [status, setStatus] = useState({
    speed: "",
    accuarcy: "",
    score: "",
    guessingTimeSpanMillis: 0,
    progressValue: 0
  });

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='main'>
          <StatusBar status={status} remainingSquares={remainingGuesses} />

          <Board
            wrongCords={wrongCords} highlightedCord={highlightedCord} cordsVisibility={cordsVisibility}
            isBoardRotated={isBoardRotated}
          />
          <CordsInput checkGuess={checkGuess} />
        </div>
      </div>

      <OptionsForm
        toggleVisibilityOfCords={toggleVisibilityOfCords}
        cordsVisibility={cordsVisibility}
        boardRotate={() => setBoardRotation(!isBoardRotated)}
      />

    </div>
  );
}

export default App;
