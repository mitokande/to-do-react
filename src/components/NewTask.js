import React from 'react'

export default function NewTask() {
    return (
        <div>
            <div className='form-group'>
                <label>New Task Name:</label>
                <input className='form-control' />
            </div>
            <div>
                <label>Task Date</label>
                <input className='form-control' />
            </div>
        </div>
    )
}
