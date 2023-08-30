
import React from 'react'
import TodoInput from './todo-input'
import TodoList from './todo-list'
import TodoFilters from './todo-filters'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/types/supabase'

export const dynamic = 'force-dynamic'

const TodoContainer = async () => {

  const supabase = createServerComponentClient<Database>({ cookies })
  const { data } = await supabase.from('todo').select()

  const todos = data ?? [];

  return (
    <main>
      <TodoInput />
      <TodoList todos={todos} />
      <div className='lg:hidden mt-4 flex justify-center bg-white dark:bg-dark-bg transition-colors duration-[500ms] rounded-[5px] w-full pt-[15px] pb-[19px] shadow-list-shadow-light dark:shadow-input-shadow-dark'>
        <TodoFilters />
      </div>
    </main>
  )
}

export default TodoContainer