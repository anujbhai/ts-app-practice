import React, { useRef } from 'react'

import './input-field-styles.css'

interface InputFieldProps {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAddTodo: (e: React.FormEvent) => void
}

const InputField: React.FC<InputFieldProps> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      className='input'
      onSubmit={ (e) => {
          handleAddTodo(e)
          inputRef.current?.blur()
        }
      }
    >
      <input
        ref={inputRef}
        value={ todo }
        onChange={ e => setTodo(e.target.value) }
        type="input"
        placeholder='Enter a task'
        className='input__box'
      />

      <button
        className="input__submit"
        type='submit'
      >Go</button>
    </form>
  )
}

export default InputField
