import React, { useState } from 'react'
import Board from '../Board/Board'
import CoordsInput from '../CordsInput/CoordsInput';

const BOARD_SIZE = 8;

const BoardInputMode = ({ stats, setStats, options, settings }) => {

    const randInt = (max) => Math.floor(Math.random() * max)
    const randCoord = () => "abcdefgh".at(randInt(BOARD_SIZE)) + (randInt(BOARD_SIZE) + 1);


    const [wrongCoords, setWrongCoords] = useState([]);
    const [highlightedCoord, setHighlightedCoord] = useState(randCoord());

    const [startingTime, setStartingTime] = useState(0);

    function start() {
        setStartingTime(Date.now());
    }


    function checkGuess(value) {
        if (stats.remainingSquares === settings.MAX_GUESSES) start();

        value === highlightedCoord
            ? markAsCorrect()
            : markAsIncorrect(value);

        if (stats.remainingSquares === 1) finish();
    }


    function markAsCorrect() {
        setStats({
            ...stats,
            remainingSquares: stats.remainingSquares - 1
        });
        setHighlightedCoord(randCoord());
        setWrongCoords([]);
    }


    function markAsIncorrect(value) {

        if (!wrongCoords.includes(value)) {
            setStats({
                ...stats,
                badAttemptCounter: stats.badAttemptCounter + 1
            });
            setWrongCoords([...wrongCoords, value]);
        }
    }


    function finish() {
        const guessingTimeSpanMillis = Date.now() - startingTime;
        const speed = settings.MAX_GUESSES / (guessingTimeSpanMillis / (1000 * 60));
        const accuracy = ((settings.MAX_GUESSES - stats.badAttemptCounter) / settings.MAX_GUESSES) * 100;
        const dailySessionCompletetion = stats.dailySessionCompletetion + guessingTimeSpanMillis / settings.DAILY_TIME_IN_MILLIS * 100;
        setStats({
            guessingTimeSpanMillis: guessingTimeSpanMillis,
            speed: speed.toFixed(2), // coords per minute
            accuracy: accuracy.toFixed(2),
            score: (speed * accuracy).toFixed(2),
            dailySessionCompletetion: dailySessionCompletetion,
            remainingSquares: settings.MAX_GUESSES,
            badAttemptCounter: 0,
        });
    }


    return (
        <div>
            <Board
                wrongCoords={wrongCoords}
                highlightedCoord={highlightedCoord}
                coordsVisibility={options.coordsVisibility}
                isBoardRotated={options.isBoardRotated}
            />
            <CoordsInput checkGuess={checkGuess} />
        </div>
    )
}

export default BoardInputMode;