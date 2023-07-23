import { React, useState } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Dentist Appointment!',
      dateTime: '13.02.2023 13:30',
      reminder: true
    },
    {
      id: 2,
      text: 'Homecoming',
      dateTime: '23.05.2023 18:30',
      reminder: true
    }
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    console.log(todos)
  }
  return (
    <div className='main'>
      <Header></Header>
      <Todos tasks={todos} onDelete={deleteTodo} ></Todos>
    </div>
  )
}
