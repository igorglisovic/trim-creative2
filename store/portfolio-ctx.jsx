'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const PortfolioContext = createContext({
  currentFilter: {},
  updateCurrentFilter: () => {},
})

export const usePortfolioContext = () => useContext(PortfolioContext)

export const PortfolioContextProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState(null)

  useEffect(() => {
    const portfolioFilter = JSON.parse(localStorage.getItem('portfolio-filter'))

    if (portfolioFilter) {
      setCurrentFilter(portfolioFilter)
    }
  }, [])

  useEffect(() => {
    // console.log('currentFilter ', currentFilter)
  }, [currentFilter])

  const updateCurrentFilter = filter => {
    setCurrentFilter(filter)
    console.log('currentFilter ', filter)

    localStorage.setItem('portfolio-filter', JSON.stringify(filter))
  }

  return (
    <PortfolioContext.Provider value={{ currentFilter, updateCurrentFilter }}>
      {children}
    </PortfolioContext.Provider>
  )
}
