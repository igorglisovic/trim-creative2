import { motion as m } from 'framer-motion'
import { useAnimationContext } from '@/store/animation-ctx'
import Lenis from '@studio-freight/lenis'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Main = ({ children, path }) => {
  const [removeComponent, setRemoveComponent] = useState(false)

  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
    variants,
    updateVariants,
  } = useAnimationContext()

  const router = useRouter()

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [animationFinished])

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    let variantsObj

    if (!animationPosition?.x || !animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
        },
        show: {
          clipPath: `circle(${screenWidth > screenHeight ? screenWidth : screenHeight}px at ${
            screenWidth / 2
          }px ${screenHeight / 2}px)`,
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }

    if (animationPosition?.x && animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${animationPosition.x}px ${animationPosition.y}px)`,
        },
        show: {
          clipPath: `circle(${
            screenWidth > screenHeight
              ? screenWidth + animationPosition.x
              : screenWidth + animationPosition.x
          }px at ${animationPosition?.x}px ${animationPosition?.y}px)`,
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }

    updateVariants(variantsObj)
  }, [animationPosition])

  useEffect(() => {
    if (router.pathname !== path) {
      setTimeout(() => {
        setRemoveComponent(true)
      }, 1800)
    }
  }, [router, path])

  return (
    variants &&
    !removeComponent && (
      <m.main
        variants={variants}
        initial={'hidden'}
        animate={'show'}
        exit={{ opacity: 0.99 }}
        transition={{
          // type: 'ease-out',
          // type: 'tween',
          duration: 1,
          ease: 'circOut',
          // ease: [0.1, 0.67, 0.83, 1.17],
          // mass: 0.5,
          // bounce: 0.5,
          // damping: 30,
          // stiffness: 50,
          // restDelta: 0.001,
          // type: 'spring',
          // velocity: 50,
          // ease: 'easeOut',
        }}
        onAnimationStart={() => {
          updateAnimationStarted(true)
          updateAnimationFinished(false)
        }}
        onAnimationComplete={() => {
          updateAnimationFinished(true)
          updateAnimationStarted(false)
          updateBackgroundColor(false)
        }}
        className={`${
          animationFinished ? '' : 'page-transition'
        } font-main pt-[95px] dark:bg-dark overflow-x-hidden`}
      >
        {children}
      </m.main>
    )
  )
}

export default Main
