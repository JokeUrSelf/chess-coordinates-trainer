import React from 'react'
import Square from '../Square/Square'
import cl from "./Board.module.css"
const Board = ({ wrongCoords, highlightedCoord, coordsVisibility, isBoardRotated }) => {
    const calculateCordFromIndex = (index) => {
        if (isBoardRotated)
            return "abcdefgh".at(7 - index % 8) + (Math.floor(index / 8) + 1)
        return "abcdefgh".at(index % 8) + (8 - Math.floor(index / 8))
    }
    const determineColorFromIndex = (index) => (index + Math.floor(index / 8)) % 2;
    return (
        <div className={cl.wrapper}>
            <div className={cl.board}>
                {new Array(64).fill(0).map((_, index) => {
                    const coord = calculateCordFromIndex(index, isBoardRotated);
                    const isSquareWhite = !determineColorFromIndex(index);
                    return <Square
                        isWrong={wrongCoords.includes(coord)}
                        cord={coordsVisibility ? coord : ""}
                        isHighlighted={highlightedCoord === coord}
                        isWhite={isSquareWhite}
                        key={index}
                    />
                }
                )}
            </div>
        </div>
    )
}
export default Board;
