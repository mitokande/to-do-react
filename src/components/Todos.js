import React from 'react'
import Todo from './Todo'


export default function Todos({ tasks, onDelete, onComplete }) {
    return (
        <div>
            <h2>-Tasks</h2>
            {tasks.length > 0 ? tasks.map((todo) => (
                <Todo key={todo.id} onDelete={onDelete} onComplete={onComplete} todo={todo}></Todo>
            )) : 'Nothing to do!'}
        </div>
    )
}
