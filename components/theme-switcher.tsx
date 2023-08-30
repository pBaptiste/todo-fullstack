"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/theme-provider'
import Image from 'next/image'

const ThemeSwitcher = () => {
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)
    
    const handleClick = () => { 
        setIsDarkMode((prev) => !prev)
    }
  
  return (
    <button onClick={handleClick}>
        {isDarkMode ? (
            <Image src="/images/icon-sun.svg" width={26} height={26} alt="Sun" />
        ) : (
            <Image src="/images/icon-moon.svg" width={26} height={26} alt="Moon" />
        )}
    </button>
  )
}

export default ThemeSwitcher