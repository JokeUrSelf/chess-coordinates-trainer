import React from 'react'
import Square from '../Square/Square'
import cl from "./Board.module.css"
const Board = ({ wrongCoords, highlightedCoord, coordsVisibility, isBoardRotated }) => {
    const coordFromIndex = (index) => {
        if (isBoardRotated)
            return "abcdefgh".at(7 - index % 8) + (Math.floor(index / 8) + 1)
        return "abcdefgh".at(index % 8) + (8 - Math.floor(index / 8))
    }
    const colorFromIndex = (index) => (index + Math.floor(index / 8)) % 2;
    return (
        <div className={cl.wrapper}>
            <div className={cl.board}>
                {new Array(64).fill(0).map((_, index) => {
                    const coord = coordFromIndex(index, isBoardRotated);
                    const isSquareWhite = !colorFromIndex(index);
                    return <Square
                        isWrong={wrongCoords.includes(coord)}
                        cord={coordsVisibility ? coord : ""}
                        isHighlighted={highlightedCoord === coord}
                        isWhite={isSquareWhite}
                        // the elements never get deleted/added to the array, so it's safe to asign key to index
                        key={index}
                    />
                }
                )}
            </div>
        </div>
    )
}
export default Board;
