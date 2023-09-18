import React, { useState } from 'react'
import MyButton from '../UI/MyButton/MyButton';
import cl from './Menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCog } from '@fortawesome/free-solid-svg-icons';

const spacing = { marginBottom: "15px" };

const Menu = ({ toggleVisibilityOfCoords, boardRotate }) => {
    const [active, setActive] = useState(false);


    return (
        <div>
            <MyButton
                style={{ fontFamily: "Verdana, sans-serif", fontWeight: "bold" }}
                onClick={() => setActive(true)}
                className={cl.openOptionsBtn}> lll
            </MyButton>

            {active ?
                <div className={cl.options}>
                    <div className={cl.header}>
                        <div style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon
                                onClick={() => setActive(false)}
                                icon={faTimes}
                                size='2x'>
                            </FontAwesomeIcon>
                        </div>
                        <h1>Options</h1>
                    </div>
                    <hr style={{ margin: "15px 5px", border: "1px solid black" }}></hr>
                    <MyButton style={spacing} onClick={toggleVisibilityOfCoords}>
                        coordinates visibility
                    </MyButton>
                    <MyButton style={spacing} onClick={boardRotate}>
                        rotate the board
                    </MyButton>
                    <MyButton style={spacing} onClick={() => { }}>
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                        {" Settings"}
                    </MyButton>
                </div>
                : <></>
            }
        </div >
    )
}

export default Menu;