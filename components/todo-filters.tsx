"use client"
import React, { useContext } from 'react'
import { FilterContext } from '@/context/filter-provider'

const TodoFilters = () => {
    const {filter, setFilter } = useContext(FilterContext)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFilter(e.currentTarget.textContent || '')
    }

    return (
        <div className='flex gap-[19px]'>
            <button onClick={handleClick} className={`${filter === 'All' ? 'text-[#3A7CFD]' : 'text-light-secondary dark:text-dark-secondary'}  hover:text-light-primary  hover:dark:text-dark-primary text-sm font-bold tracking-[-0.194px]`}>All</button>
            <button onClick={handleClick} className={`${filter === 'Active' ? 'text-[#3A7CFD]' : 'text-light-secondary dark:text-dark-secondary'} hover:text-light-primary hover:dark:text-dark-primary text-sm font-bold tracking-[-0.194px]`}>Active</button>
            <button onClick={handleClick} className={`${filter === 'Completed' ? 'text-[#3A7CFD]' : 'text-light-secondary dark:text-dark-secondary'} hover:text-light-primary hover:dark:text-dark-primary text-sm font-bold tracking-[-0.194px]`}>Completed</button>
        </div>
    )
}

export default TodoFilters