import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton';
import cl from './OptionsForm.module.css';

const OptionsForm = ({ cordsVisibility, toggleVisibilityOfCords, boardRotate }) => {
    const [active, setActive] = useState(false);


    return (
        <div>
            <MyButton
                onClick={() => setActive(true)}
                style={{ top: 0, position: "absolute", transform: "rotate(90deg)", fontSize: "x-large", margin: "15px" }}>lll</MyButton>
            <div className={[cl.options, active ? cl.active : ""].join(" ")}>
                <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-evenly", width: "100%" }}>
                    <h1>Options</h1>
                    <MyButton onClick={() => setActive(false)}>X</MyButton>
                </div>
                <hr style={{ margin: "15px 5px", border: "1px solid black" }}></hr>
                <MyButton style={{ marginBottom: "15px" }} onClick={toggleVisibilityOfCords}>
                    {cordsVisibility ? "hide" : "show"} coordinates
                </MyButton>
                <MyButton onClick={boardRotate}>
                    rotate the board
                </MyButton>
            </div>
        </div>
    )
}

export default OptionsForm;