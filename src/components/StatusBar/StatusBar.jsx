import React from 'react'
import cl from "./StatusBar.module.css"
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';


const StatusBar = ({ status, remainingSquares }) => {

    return (
        <div className={cl.center}>
            <div className={cl.statusBar}>
                <span>Speed: {status.speed} SPM</span>
                <span>Accuarcy: {status.accuracy}</span>
                <span>Score: {status.score}</span>
                <hr className={cl.separator}></hr>
                Daily&nbsp;goal:
                <div style={{ gridColumnEnd: "span 2", display: "flex", alignItems: "center" }}>
                    <ProgressBar value={status.progressValue} max={100} />
                </div>
                <hr className={cl.separator}></hr>
                <span>Remaining:</span>{remainingSquares}
                <hr className={cl.separator}></hr>
            </div>
        </div>
    )
}
export default StatusBar;