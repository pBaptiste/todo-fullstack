"use client"
import React, { useState, useEffect, useContext } from 'react'
import { FilterContext } from '@/context/filter-provider'
import TodoItem from './todo-item'
import TodoFilterContainer from './todo-filter-container'
import { DragDropContext, Droppable, DroppableProvided, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { LoadingContext } from '@/context/loading-provider'


type Todo = {
  text: string
  isComplete: boolean
  id: string
}

type Props = {
  todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
  const { filter } = useContext(FilterContext);
  const { setIsLoading } = useContext(LoadingContext);

  const [isTopShadowVisible, setIsTopShadowVisible] = useState(false);
  const [filteredList, setFilteredList] = useState(todos);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(false)
    let filteredTodos = todos;

    if (filter === 'Active') {
      filteredTodos = todos.filter(todo => !todo.isComplete)
    }
    else if (filter === 'Completed') {
      filteredTodos = todos.filter(todo => todo.isComplete)
    }

    setFilteredList(filteredTodos);

  }, [todos, filter, setIsLoading])

  const deleteTodo = async (id: string) => {
    setIsLoading(true)

    await fetch(`${location.origin}/api/todos`, {
      method: 'DELETE',
      body: JSON.stringify({ id })
    })

    router.refresh()
  }

  const deleteAllCompleted = async () => {
    setIsLoading(true)

    const supabase = createClientComponentClient()
    const { data } = await supabase.from('todo').delete().match({ isComplete: true })

    router.refresh()
  }

  //Marks a Todo as complete or uncomplete when clicked on
  const updateCompleted = async (id: string, completed: boolean) => {
    setIsLoading(true)

    await fetch(`${location.origin}/api/todos`, {
      method: 'PUT',
      body: JSON.stringify({ id, completed })
    })

    router.refresh()
  }

  /* When the list of todos is large enough to be scrolled through,
   isTopShadowVisible is used to determine whether or not to display a box shadow as a
  visual indicator to the user that there is more content above the visible area of the list.*/
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    setIsTopShadowVisible(scrollTop > -1 && scrollTop + clientHeight < scrollHeight);
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const newTodos = [...todos];
    const [movedTodo] = newTodos.splice(result.source.index, 1);
    newTodos.splice(result.destination.index, 0, movedTodo);

    setFilteredList(newTodos);
  };


  return (
    <div className='bg-white dark:bg-dark-bg transition-colors duration-[500ms] rounded-[5px] w-full shadow-list-shadow-light dark:shadow-input-shadow-dark'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='todo-list' direction='vertical'>
          {(provided: DroppableProvided) => (
            <div
              ref={provided.innerRef}
              className='max-h-[350px] lg:max-h-[380px] overflow-scroll'
              onScroll={handleScroll}
            >
              {filteredList.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided: DraggableProvided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    > <TodoItem
                        text={item.text}
                        id={item.id}
                        completed={item.isComplete}
                        deleteTodo={deleteTodo}
                        updateCompleted={updateCompleted}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TodoFilterContainer
        todos={todos}
        deleteAllCompleted={deleteAllCompleted}
        showTopShadow={isTopShadowVisible}
      />
    </div>
  );
};


export default TodoList