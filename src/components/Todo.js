import React from 'react'

const Todo = props =>{
    const handleClick = ()=>{
        props.handleChoreItem(props.chore.id)
    }

    return(
        <div onClick={handleClick}>
            <p>{props.chore.name}</p>
        </div>
    )
}

export default Todo