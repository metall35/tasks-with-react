import React from 'react'
import { CompletedIcon } from "./CompletedIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <li className='tasks'>
      <CompletedIcon
        completed={props.completed} 
        onComplete={props.onComplete}
      />
      {/* <span className={`check ${props.completed && 'check--active'}`} onClick={props.onComplete} >V</span> */}
      <p className={`p ${props.completed && 'p--active'}`}>{props.text} </p>
      <DeleteIcon
        onDelete={props.onDelete}
      />
      {/* <span className='remove' onClick={props.onDelete}>X</span> */}
    </li>
  );
}

export { TodoItem }