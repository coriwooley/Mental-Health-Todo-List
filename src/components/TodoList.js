import React from "react";

export default function TodoList(){
    const todos = ['eat', 'sleep', 'brush teeth']

    return (
        <div className="tdlist">
            <h2>Todo List</h2>
            <ul>
                {todos.map(todo => {
                    return <li className="removeBullets">{todo}</li>
                })}
            </ul>
            <input type='text'></input>
            <button type='submit'>Add</button>
        </div>
    )
}