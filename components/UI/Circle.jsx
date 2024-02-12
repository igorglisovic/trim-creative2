import { useScroll, useTransform, motion as m } from 'framer-motion'

const checkAndMakePositionStr = (position, type) => {
  if (!position) return null
  return position.toString().includes('%') ? `${position}` : `${position}px`
}

const Circle = ({ size, rotate, position, z: zIndex }) => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -250])

  const top = checkAndMakePositionStr(position[0], 'top')
  const right = checkAndMakePositionStr(position[1], 'right')
  const bottom = checkAndMakePositionStr(position[2], 'bottom')
  const left = checkAndMakePositionStr(position[3], 'left')

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
      className={`absolute bg-circle-gradient rounded-full `}
    />
  )
}

export default Circle
