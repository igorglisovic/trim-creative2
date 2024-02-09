import { useAnimationContext } from '@//store/animation-ctx'
import { useContainerContext } from '@//store/container-ctx'
import { useEffect, useRef } from 'react'

const Container = ({ children }) => {
  const ref = useRef()

  const { updateContainerWidth, containerWidth } = useContainerContext()
  const { animationFinished } = useAnimationContext()

  useEffect(() => {
    // if (animationFinished) {
    if (!containerWidth) {
      updateContainerWidth(ref.current.getBoundingClientRect().width - 96)
    }

    const calcWidth = () => {
      updateContainerWidth(ref.current.getBoundingClientRect().width - 96)
    }

    window.addEventListener('resize', calcWidth)
    return () => {
      window.removeEventListener('resize', calcWidth)
    }
    // }
  }, [animationFinished])

  return (
    <div ref={ref} className="max-w-[1700px] m-auto md:px-12 px-6">
      {children}
    </div>
  )
}

export default Container
