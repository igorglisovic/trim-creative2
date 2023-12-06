'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ContainerContext = createContext()

export const useContainerContext = () => useContext(ContainerContext)

export const ContainerContextProvider = ({ children }) => {
  const [containerWidth, setContainerWidth] = useState()

  const updateContainerWidth = value => {
    setContainerWidth(value)
  }

  return (
    <ContainerContext.Provider value={{ containerWidth, updateContainerWidth }}>
      {children}
    </ContainerContext.Provider>
  )
}
