import React from 'react'

import './todo-list-styles.css'
import { ITodo } from '../../model'
import SingleTodo from '../single-todo'

interface ITodoProps {
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const TodoList: React.FC<ITodoProps> = ({ todos, setTodos }: ITodoProps) => {
  return (
    <div className='todos'>
      { todos.map((todo) => (
        <SingleTodo
          key={ todo.id }
          todo={ todo }
          todos={ todos }
          setTodos={ setTodos }
        />
      )) }
    </div>
  )
}

export default TodoList
