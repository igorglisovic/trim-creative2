'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const AnimationContext = createContext()

export const useAnimationContext = () => useContext(AnimationContext)

export const AnimationContextProvider = ({ children }) => {
  const [animationPosition, setAnimationPosition] = useState(null)
  const [animationStarted, setAnimationStarted] = useState(null)
  const [animationFinished, setAnimationFinished] = useState(null)
  const [backgroundColor, setBackgroundColor] = useState(false)

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

  // useEffect(() => {
  //   console.log(animationFinished)
  // }, [animationFinished])

  return (
    <AnimationContext.Provider
      value={{
        animationPosition,
        animationFinished,
        backgroundColor,
        animationStarted,
        updateAnimationPosition,
        updateAnimationFinished,
        updateBackgroundColor,
        updateAnimationStarted,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}
