import React from 'react'

function TodoItem(props) {
    return (
      <li className='tasks'>
        <span className='check'>V</span>
        <p>{props.text} </p>
        <span>X</span>
      </li>
    );
  }

export {TodoItem}