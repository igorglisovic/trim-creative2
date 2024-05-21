import { useAnimationContext } from '@/store/animation-ctx'
import { useContainerContext } from '@/store/container-ctx'
import { motion as m } from 'framer-motion'

const H1 = ({ children, variants }) => {
  const { containerWidth } = useContainerContext()
  const { animationFinished } = useAnimationContext()

  return (
    <m.h1
      variants={variants}
      // initial={animationFinished ? 'closed' : 'open'}
      // animate={animationFinished ? 'open' : 'closed'}
      initial={'closed'}
      animate={'open'}
      transition={{
        duration: 0.5,
        delay: 0.4,
      }}
      className={`uppercase text-center whitespace-nowrap leading-none dark:text-dark`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 10.6}px` : '235px',
        // fontSize: containerWidth ? `${containerWidth / 8.6}px` : '235px',
      }}
    >
      {children}
    </m.h1>
  )
}

export default H1
