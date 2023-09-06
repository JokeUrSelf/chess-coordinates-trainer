import React from 'react'
import cl from "./MyButton.module.css";

const MyButton = ({ children, onClick, className, ...props }) => {
  return (
    <button {...props} onClick={e => { e.preventDefault(); onClick(e); }} className={[cl.myButton, className].join(" ")}>{children}</button>
  )
}
export default MyButton;