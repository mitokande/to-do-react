import { useState, React } from 'react'
import Button from './Button'


export default function Todos() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Dentist Appointment!',
            dateTime: '13.02.2023 13:30',
            reminder: true
        },
        {
            id: 2,
            text: 'Homecoming Prom',
            dateTime: '23.05.2023 18:30',
            reminder: true
        }
    ])


    return (
        <div>
            <h2>-Tasks</h2>
            {todos.map((todo) => (
                <div className='todo-box'>
                    <div className='todo-texts'>
                        <h3 className='todo-title'>{todo.text}</h3>
                        <p className='todo-date'>{todo.dateTime}</p>
                    </div>
                    <Button title={'Delete'} bgColor='#CD6688'></Button>
                </div>
            ))}
        </div>
    )
}
