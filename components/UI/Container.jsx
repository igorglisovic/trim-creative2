import { useAnimationContext } from '@//store/animation-ctx'
import { useContainerContext } from '@//store/container-ctx'
import { useEffect, useRef } from 'react'

const Container = ({ children, className }) => {
  const ref = useRef()

  const { updateContainerWidth, containerWidth } = useContainerContext()
  const { animationFinished } = useAnimationContext()

  useEffect(() => {
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
  }, [animationFinished])

  return (
    <div ref={ref} className={`max-w-[1700px] m-auto md:px-12 px-[1.2rem]`}>
      {children}
    </div>
  )
}

export default Container
