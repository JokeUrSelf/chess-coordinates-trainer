import React from 'react'
import cl from "./Square.module.css"

const Square = ({ isHighlighted, isWrong, cord, isWhite }) => {
  const colorPallet = {
    blackSquare: "#b88762",
    whiteSquare: "#edd6b0",
    highlightedBG: "rgb(33, 150, 243)",
    highlightedFG: "white",
    wrongBG: "red",
    wrongFG: "white"
  }

  const background = (() => {
    if (isHighlighted) return colorPallet.highlightedBG;
    if (isWrong) return colorPallet.wrongBG;
    if (isWhite) return colorPallet.whiteSquare;
    return colorPallet.blackSquare
  })();
  const foreground = (() => {
    if (isHighlighted) return colorPallet.highlightedFG;
    if (isWrong) return colorPallet.wrongFG;
    if (isWhite) return colorPallet.blackSquare;
    return colorPallet.whiteSquare
  })();
  
  return (
    <div
      style={{ background: background, color: foreground }}
      className={cl.square}>
      <b>{cord}</b>
    </div>
  )
}
export default Square;
