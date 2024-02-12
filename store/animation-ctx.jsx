import { createContext, useContext, useEffect, useState } from 'react'

const AnimationContext = createContext()

export const useAnimationContext = () => useContext(AnimationContext)

export const AnimationContextProvider = ({ children }) => {
  const [animationPosition, setAnimationPosition] = useState(null)
  const [animationStarted, setAnimationStarted] = useState(null)
  const [animationFinished, setAnimationFinished] = useState(null)
  const [backgroundColor, setBackgroundColor] = useState(false)
  const [variants, setVariants] = useState(null)

  const updateAnimationPosition = value => {
    setAnimationPosition(value)
  }

  const updateAnimationStarted = value => {
    setAnimationStarted(value)
  }

  const updateAnimationFinished = value => {
    setAnimationFinished(value)
  }

  const updateBackgroundColor = value => {
    setBackgroundColor(value)
  }

  const updateVariants = value => {
    setVariants(value)
  }

  return (
    <AnimationContext.Provider
      value={{
        animationPosition,
        animationFinished,
        backgroundColor,
        animationStarted,
        variants,
        updateAnimationPosition,
        updateAnimationFinished,
        updateBackgroundColor,
        updateAnimationStarted,
        updateVariants,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
