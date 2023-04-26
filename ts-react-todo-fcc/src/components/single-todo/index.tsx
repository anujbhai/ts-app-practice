import React from 'react'
import { AiFillEdit } from 'react-icons/ai'

import { ITodo } from '../../model'

interface ISingleTodoProps {
  todo: ITodo
  todos: ITodo[]
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}

const SingleTodo = ({ todo, todos, setTodos }: ISingleTodoProps) => {
  return (
    <form className='todos__single'>
      <span className="todos__single--text">
        { todo.todo }
      </span>

      <div>
        <span className='icon'>
          <AiFillEdit />
        </span>
      </div>
    </form>
  )
}

export default SingleTodo
