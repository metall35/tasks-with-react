import React from 'react'
import { TodoIcon } from "./TodoIcon";

function CompletedIcon({completed, onComplete}) {
    return (
        <TodoIcon
            type='check'
            color={completed ? '#64b83d' : '#c7c7c7'}
            onClick={onComplete}
        />
    )
}
export {CompletedIcon}