import { React, useState } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import NewTask from './components/NewTask'

export default function App() {
  const [sortDesc, setSortDesc] = useState(0)
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Dentist Appointment!',
      dateTime: '2023-05-29',
      reminder: true,
      completed: false,
    },
    {
      id: 2,
      text: 'Homecoming',
      dateTime: '2023-06-29',
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
  const deleteAll = () => {
    setTodos([])
  }

  const sortAction = (type) => {
    switch (type) {
      case "asc":
        setTodos([...todos.sort(function (a, b) {
          return new Date(b.dateTime) - new Date(a.dateTime);
        })])
        break;
      case "desc":
        setTodos([...todos.sort(function (a, b) {
          return new Date(b.dateTime) - new Date(a.dateTime);
        })])
        break;
      default:
        break;
    }

  }
  return (
    <div className='main'>
      <Header></Header>
      <NewTask addTask={addTodo} />
      <Todos onComplete={complete} tasks={todos} deleteAll={deleteAll} sortAction={sortAction} onDelete={deleteTodo} ></Todos>
    </div>
  )
}
