import React, { useState } from 'react'
import Button from './Button'

export default function NewTask({ addTask }) {
    const [taskName, setTaskName] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskReminder, setReminder] = useState(false)

    const task = {
        text: taskName,
        dateTime: taskDate,
        reminder: taskReminder
    }
    return (
        <div>
            <div className='form-group mb-2'>
                <label>New Task Name:</label>
                <input className='form-control' onChange={(event) => setTaskName(event.target.value)} />
            </div>
            <div className='form-group mb-2'>
                <label>Task Date</label>
                <input className='form-control' onChange={(event) => setTaskDate(event.target.value)} />
            </div>
            <div className='form-group mb-2'>
                <label>Task Date</label>
                <input type='checkbox' className='form-check' onChange={(event) => setReminder(event.target.checked)} />
            </div>
            <Button onClick={() => addTask(task)} title="Add" bgColor="green"></Button>
        </div>
    )
}