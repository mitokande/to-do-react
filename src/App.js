import { React, useState } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import NewTask from './components/NewTask'

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Dentist Appointment!',
      dateTime: '13.02.2023 13:30',
      reminder: true,
      completed: false,
    },
    {
      id: 2,
      text: 'Homecoming',
      dateTime: '23.05.2023 18:30',
      reminder: true,
      completed: false,
    }
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
    console.log(todos)
  }
  const addTodo = (task) => {
    const id = Math.floor(Math.random() * 1000) + 7;
    const newTodo = { id, ...task }
    setTodos([...todos, newTodo])
    console.log(todos)

  }

  const complete = (id) => {
    setTodos(current => current.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: true }
      }
      return todo
    }))
  }
  return (
    <div className='main'>
      <Header></Header>
      <NewTask addTask={addTodo} />
      <Todos onComplete={complete} tasks={todos} onDelete={deleteTodo} ></Todos>
    </div>
  )
}
