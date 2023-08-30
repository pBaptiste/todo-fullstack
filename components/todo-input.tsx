"use client"
import React, { useState, useContext } from 'react'
import { LoadingContext } from '@/context/loading-provider'
import EmptyRing from './empty-ring'
import { useRouter } from 'next/navigation'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

const TodoInput = () => {
  const [todo, setTodo] = useState('')
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (todo.trim() !== '') {
      setIsLoading(true)

      await fetch(`${location.origin}/api/todos`, {
        method: 'POST',
        body: JSON.stringify({ text: todo, isComplete: false }),
      })

      setTodo('')

      router.refresh()
    }
  }

  return (
    <form onSubmit={handleSubmit}
      className='bg-white dark:bg-dark-bg transition-colors duration-[500ms] py-[14px] px-5 rounded-[5px] shadow-input-shadow-light dark:shadow-input-shadow-dark flex gap-3 mb-4 lg:mb-6'>
      {(isLoading && todo !== '') ? <CgSpinnerTwoAlt className='animate-spin text-[#3A7CFD] text-[25px]' /> : <EmptyRing />}
      <input
        disabled={isLoading}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Create a new todo…'
        className='bg-transparent todo-text outline-none w-full caret-[#3A7CFD]' />
    </form>
  )
}

export default TodoInput