import React from 'react'

function TodoItem(props) {
    return (
      <li className='tasks'>
        <span className={`check ${props.completed && 'check--active'}`} onClick={props.onComplete} >V</span>
        <p className={`p ${props.completed && 'p--active'}`}>{props.text} </p>
        <span className='remove' onClick={props.onDelete}>X</span>
      </li>
    );
  }

export {TodoItem}