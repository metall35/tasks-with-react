import { BiCheck } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import React from 'react'
const iconsTypes = {
    "check": (color) => <BiCheck className="icon-svg" fill={color} />,
    "remove":(color) => <BiX className="icon-svg" fill={color} />
}
function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`icon ${type}`} onClick={onClick} >
            {iconsTypes[type](color)}
        </span>
    )
}

export { TodoIcon }