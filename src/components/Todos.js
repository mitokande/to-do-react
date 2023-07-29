import React from 'react'
import Todo from './Todo'
import Button from './Button'
import { FaSortAmountDown } from 'react-icons/fa'


export default function Todos({ tasks, onDelete, onComplete, deleteAll, sortAction }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>-Tasks</h2>
                <div>
                    <Button title={<FaSortAmountDown style={{ alignSelf: 'center' }} />} onClick={() => sortAction("asc")} bgColor="#A0BFE0"></Button>
                    <Button title={'Delete All'} onClick={deleteAll} bgColor={'darkred'} />
                </div>
            </div>
            {tasks.length > 0 ? tasks.map((todo) => (
                <Todo key={todo.id} onDelete={onDelete} onComplete={onComplete} todo={todo}></Todo>
            )) : 'Nothing to do!'}
        </div>
    )
}
