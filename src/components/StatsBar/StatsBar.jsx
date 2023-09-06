import React from 'react'
import cl from "./StatsBar.module.css"
import { ProgressBar } from '../UI/ProgressBar/ProgressBar';


const StatsBar = ({ stats }) => {

    return (
        <div className={cl.center}>
            <div className={cl.statsBar}>


                <span>Speed: {stats.speed} SPM</span>
                <span>Accuarcy: {stats.accuracy}</span>
                <span>Score: {stats.score}</span>


                <hr className={cl.separator}></hr>


                <span>Daily&nbsp;goal:</span>
                <div className={cl.progressWrapper}>
                    <ProgressBar value={stats.sessionCompletetion} max={100} />
                </div>


                <hr className={cl.separator}></hr>


                <span>Remaining:</span>{stats.remainingSquares}

                
                <hr className={cl.separator}></hr>
            </div>
        </div>
    )
}
export default StatsBar;