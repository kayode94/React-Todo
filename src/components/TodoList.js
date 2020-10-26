// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

const TodoList = props =>{
    const handleClick = () =>{
        props.handleResetChores()
    }

    return(
        <div className='chore-list'>
            {props.chores.map(chore=>(
                <Todo handleChoreItem={props.handleChoreItem} key={chore.id} chore={chore}/>
            ))}
            <button onClick={handleClick}>Clear Chores</button>
        </div>
    )
}

export default TodoList