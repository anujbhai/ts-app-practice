import { useState } from 'react'

import './App.css'
import InputField from './components/input-field'
import { ITodo } from './model'

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo: todo,
          isDone: false
        }
      ])

      setTodo('')
    }
  }

  console.log(todos)
  

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>

      <InputField
        todo={ todo }
        setTodo={ setTodo }
        handleAddTodo={ handleAddTodo }
      />

      { todos.map((t) => (<li key={ t.id }>{ t.todo }</li>)) }
    </div>
  )
}

export default App
