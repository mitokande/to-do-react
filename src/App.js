import React from 'react'
import Header from './components/Header'
import Todos from './components/Todos'

export default function App() {
  return (
    <div className='main'>
      <Header></Header>
      <Todos></Todos>
    </div>
  )
}
