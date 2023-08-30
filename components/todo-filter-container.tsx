"use client"
import React, { useState, useEffect, useContext } from 'react'
import { LoadingContext } from '@/context/loading-provider'
import TodoFilters from './todo-filters'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

type Props = {
  showTopShadow: boolean;
  todos: Todo[]
  deleteAllCompleted: () => void;
};

type Todo = {
  text: string
  isComplete: boolean
}


const TodoFilterContainer = ({ showTopShadow, todos, deleteAllCompleted }: Props) => {
  const [count, setCount] = useState(0)
  const [isClicked, setIsClicked] = useState(false)
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    let remainingCount = todos.filter(todo => !todo.isComplete).length
    setCount(remainingCount)
  }, [todos])

  useEffect(() => {
    if (isClicked && !isLoading) {
      setIsClicked(false);
    }

  }, [isLoading, isClicked]);

  const handleClick = async () => {
    setIsLoading(true)
    setIsClicked(true)
    deleteAllCompleted()
  }

  return (
    <div className={`flex items-center justify-between dark:border-[#393A4B] px-5 py-4 ${showTopShadow ? 'shadow-scroll-shadow dark:shadow-scroll-shadow-dark' : ''}`}>
      <p className='text-light-secondary dark:text-dark-secondary text-xs lg:text-sm tracking-[-0.167px lg:tracking-[-0.194px]'>{count} items left</p>
      <div className='hidden lg:block shadow-list-shadow-light dark:shadow-input-shadow-dark'>
        <TodoFilters />
      </div>

      <button onClick={handleClick}
        className='text-light-secondary hover:text-light-primary dark:text-dark-secondary hover:dark:text-dark-primary font-normal text-xs lg:text-sm tracking-[-0.167px lg:tracking-[-0.194px]'>{(isLoading && isClicked) ? <CgSpinnerTwoAlt className='animate-spin text-[#3A7CFD] text-[20px]' /> : 'Clear Completed'}</button>
    </div>
  )
}

export default TodoFilterContainer