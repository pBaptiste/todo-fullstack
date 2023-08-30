"use client"
import React, { useState, createContext, ReactNode } from 'react'

interface FilterContextProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext<FilterContextProps>({
  filter: 'All',
  setFilter: () => {},
})

interface FilterProviderProps {
  children: ReactNode;
}

const FilterProvider = ({children}: FilterProviderProps) => {
    const [filter, setFilter] = useState('All')

  return (
    <FilterContext.Provider value={{filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider