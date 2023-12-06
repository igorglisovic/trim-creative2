'use client'

import { createContext, useContext, useState } from 'react'

export const FontsContext = createContext()

export const useFontsContext = () => useContext(FontsContext)

export const FontsContextProvider = ({ children }) => {
  const [akiraFont, setAkiraFont] = useState()
  const [gabaritoFont, setGabaritoFont] = useState({ className: '' })

  const updateAkiraFont = value => {
    setAkiraFont(value)
  }

  const updateGabaritoFont = value => {
    setGabaritoFont(value)
  }

  return (
    <FontsContext.Provider
      value={{ akiraFont, gabaritoFont, updateAkiraFont, updateGabaritoFont }}
    >
      {children}
    </FontsContext.Provider>
  )
}
