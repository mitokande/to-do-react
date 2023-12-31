import React from 'react'
import Button from './Button'
import { FaExclamationCircle, FaRegCalendarAlt } from 'react-icons/fa'

export default function Todo({ todo, onDelete, onComplete }) {
    return (
        <div onDoubleClick={() => onComplete(todo.id)} className='todo-box'>
            <div className='todo-texts'>
                <h3 className='todo-title' style={todo.completed ? { textDecoration: 'line-through' } : {}}>{todo.text}{todo.reminder ? (<FaExclamationCircle className='mx-2' color='red' />) : null}</h3>
                <div className='todo-date-box'>
                    <FaRegCalendarAlt />
                    <p className='todo-date'>{todo.dateTime}</p>
                </div>
            </div>
            <Button onClick={() => onDelete(todo.id)} title={'Delete'} bgColor='#CD6688'></Button>
        </div>
    )
}
