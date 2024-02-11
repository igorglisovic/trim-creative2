'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }) => {
  const [userTheme, setUserTheme] = useState(null)
  const [systemTheme, setSystemTheme] = useState(null)

  useEffect(() => {
    const portfolioFilter = JSON.parse(localStorage.getItem('portfolio-filter'))

    if (portfolioFilter) {
      setCurrentFilter(portfolioFilter)
    }
  }, [])

  const updateCurrentFilter = filter => {
    setCurrentFilter(filter)

    localStorage.setItem('portfolio-filter', JSON.stringify(filter))
  }

  return (
    <ThemeContext.Provider value={{ currentFilter, updateCurrentFilter }}>
      {children}
    </ThemeContext.Provider>
  )
}
