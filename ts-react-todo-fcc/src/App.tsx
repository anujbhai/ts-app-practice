import { useState } from 'react'

import './App.css'
import InputField from './components/input-field'
import { ITodo } from './model'
import TodoList from './components/todo-list'

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

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>

      <InputField
        todo={ todo }
        setTodo={ setTodo }
        handleAddTodo={ handleAddTodo }
      />

      {/* { todos.map((t) => (<li key={ t.id }>{ t.todo }</li>)) } */}
      <TodoList
        todos={ todos }
        setTodos={ setTodos }
      />
    </div>
  )
}

export default App
