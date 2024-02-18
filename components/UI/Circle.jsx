import { useAnimationContext } from '@/store/animation-ctx'
import {
  useScroll,
  useTransform,
  motion as m,
  useMotionValueEvent,
} from 'framer-motion'
import { useState } from 'react'

const checkAndMakePositionStr = position => {
  if (!position) return null
  return position.toString().includes('%') ? `${position}` : `${position}px`
}

const Circle = ({ size, rotate, position, z: zIndex, className }) => {
  const [hookedYPostion, setHookedYPosition] = useState(0)

  const { scrollYProgress } = useScroll()
  const { animationFinished } = useAnimationContext()

  const y = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished && hookedYPostion !== 250) {
      setHookedYPosition(250)
    }
  })

  const top = checkAndMakePositionStr(position[0])
  const right = checkAndMakePositionStr(position[1])
  const bottom = checkAndMakePositionStr(position[2])
  const left = checkAndMakePositionStr(position[3])

  const width = `${size}px`
  const height = `${size}px`
  rotate = `${rotate}deg`

  return (
    <m.div
      style={{
        y,
        zIndex,
        rotate,
        top,
        right,
        left,
        bottom,
        width,
        height,
      }}
      className={`absolute bg-circle-gradient rounded-full ${className}`}
    />
  )
}

export default Circle
