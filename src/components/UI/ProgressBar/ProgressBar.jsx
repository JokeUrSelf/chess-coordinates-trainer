import React from 'react'
import cl from './ProgressBar.module.css'

export const ProgressBar = ({style, value = 0, max = 100 }) => {
    return (
        <div className={cl.progressBG} style={{...style, gridTemplateColumns: `repeat(${max},1fr` }}>
            {value ? <div className={cl.progressFG} style={{ gridColumnEnd: `span ${value}` }}></div> : <div></div>}
        </div>
    )
}
