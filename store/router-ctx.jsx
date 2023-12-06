'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export const RouterContext = createContext()

export const useRouterContext = () => useContext(RouterContext)

export const RouterContextProvider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState('')
  const [pathHistory, setPathHistory] = useState('')

  const updateCurrentPath = value => {
    setCurrentPath(value)
  }

  useEffect(() => {
    if (currentPath === '') return
    let currentState = JSON.parse(localStorage.getItem('router-history'))

    if (currentState?.length) {
      if (currentState?.length >= 2) {
        currentState = currentState.pop()
      }

      const newState = [currentState, currentPath]

      localStorage.setItem('router-history', JSON.stringify(newState))
      setPathHistory(newState)
      return
    }

    localStorage.setItem('router-history', JSON.stringify([currentPath]))
  }, [currentPath])

  return (
    <RouterContext.Provider
      value={{ updateCurrentPath, currentPath, pathHistory }}
    >
      {children}
    </RouterContext.Provider>
  )
}
