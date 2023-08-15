import React from 'react'
import cl from "./CordsInput.module.css"

const CordsInput = ({ checkGuess }) => {
    return (
        <div className={cl.flexWrapper}>
            <input
                onChange={e => {
                    if (e.target.value.length === 2) {
                        if (!"12345678".includes(e.target.value[1])) {
                            e.target.value = e.target.value[0];
                            return;
                        }
                        checkGuess(e.target.value);
                        e.target.value = ""
                    }
                    if (!"abcdefgh".includes(e.target.value)) e.target.value = "";
                }
                }
                maxLength={2}
                className={cl.cordInput} type="text"
            />
        </div>
    )
}
export default CordsInput;
