'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const PortfolioContext = createContext({
  currentFilter: {},
  updateCurrentFilter: () => {},
})

export const usePortfolioContext = () => useContext(PortfolioContext)

export const PortfolioContextProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState(null)

  const updateCurrentFilter = filter => {
    setCurrentFilter(filter)
  }

  return (
    <PortfolioContext.Provider value={{ currentFilter, updateCurrentFilter }}>
      {children}
    </PortfolioContext.Provider>
  )
}
