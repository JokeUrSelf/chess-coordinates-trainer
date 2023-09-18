import React, { useState } from 'react';
import './App.css';
import StatsBar from './components/StatsBar/StatsBar';
import BoardInputMode from './components/BoardModes/BoardInputMode';
import Menu from './components/Menu/Menu';


const SETTINGS = {
  MAX_GUESSES: 32,
  DAILY_TIME_IN_MILLIS: 30 * 1000 * 60
};

function App() {


  const [options, setOptions] = useState({
    coordsVisibility: false,
    isBoardRotated: false
  })


  const [stats, setStats] = useState({
    speed: "",
    accuarcy: "",
    score: "",
    guessingTimeSpanMillis: 0,
    dailySessionCompletetion: 0,
    remainingSquares: SETTINGS.MAX_GUESSES,
    badAttemptCounter: 0,
    startingTime: 0
  });

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='main'>
          <StatsBar stats={stats} />

          <BoardInputMode
            stats={stats}
            setStats={setStats}
            options={options}
            settings={SETTINGS}
          />

        </div>
      </div>

      <Menu
        toggleVisibilityOfCoords={() => setOptions({ ...options, coordsVisibility: !options.coordsVisibility })}
        boardRotate={() => setOptions({ ...options, isBoardRotated: !options.isBoardRotated })}
      />

    </div>
  );
}


export default App;
