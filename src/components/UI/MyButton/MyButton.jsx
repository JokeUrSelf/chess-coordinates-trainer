import React from 'react'
import cl from "./MyButton.module.css";

const MyButton = ({ children, onClick, ...props }) => {
  return (
    <button {...props} onClick={e => { e.preventDefault(); onClick(e); }} className={cl.myButton}>{children}</button>
  )
}
export default MyButton;