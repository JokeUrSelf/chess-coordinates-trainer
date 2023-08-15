import React from 'react'
import Square from '../Square/Square'
import cl from "./Board.module.css"
const Board = ({ wrongCords, highlightedCord, cordsVisibility, isBoardRotated }) => {
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
                    const cord = calculateCordFromIndex(index, isBoardRotated);
                    const isSquareWhite = !determineColorFromIndex(index);
                    return <Square
                        isWrong={wrongCords.includes(cord)}
                        cord={cordsVisibility ? cord : ""}
                        isHighlighted={highlightedCord === cord}
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
