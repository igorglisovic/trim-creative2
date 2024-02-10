import { createContext, useContext, useState } from 'react'

const HeaderContext = createContext({
  fixedHeader: true,
  updateFixedHeader: () => {},
})

export const useHeaderContext = () => useContext(HeaderContext)

export const HeaderContextProvider = ({ children }) => {
  const [fixedHeader, setFixedHeader] = useState(false)

  const updateFixedHeader = value => {
    setFixedHeader(value)
  }

  return (
    <HeaderContext.Provider value={{ fixedHeader, updateFixedHeader }}>
      {children}
    </HeaderContext.Provider>
  )
}
