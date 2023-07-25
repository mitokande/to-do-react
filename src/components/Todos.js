import React from 'react'
import Todo from './Todo'
import Button from './Button'

export default function Todos({ tasks, onDelete, onComplete, deleteAll }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>-Tasks</h2>
                <Button title={'Delete All'} onClick={deleteAll} bgColor={'darkred'} />
            </div>
            {tasks.length > 0 ? tasks.map((todo) => (
                <Todo key={todo.id} onDelete={onDelete} onComplete={onComplete} todo={todo}></Todo>
            )) : 'Nothing to do!'}
        </div>
    )
}
