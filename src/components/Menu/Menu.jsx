import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton';
import cl from './Menu.module.css';

const Menu = ({ toggleVisibilityOfCoords, boardRotate }) => {
    const [active, setActive] = useState(false);


    return (
        <div>
            <MyButton
                onClick={() => setActive(true)}
                className={cl.openOptionsBtn}> lll
            </MyButton>

            {active ?
                <div className={cl.options}>
                    <div className={cl.header}>
                        <h1>Options</h1>
                        <MyButton onClick={() => setActive(false)}>X</MyButton>
                    </div>
                    <hr style={{ margin: "15px 5px", border: "1px solid black" }}></hr>
                    <MyButton style={{ marginBottom: "15px" }} onClick={toggleVisibilityOfCoords}>
                        coordinates visibility
                    </MyButton>
                    <MyButton onClick={boardRotate}>
                        rotate the board
                    </MyButton>
                </div>
                : <></>
            }
        </div>
    )
}

export default Menu;