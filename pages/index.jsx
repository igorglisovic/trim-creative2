'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import { AnimatePresence, motion as m } from 'framer-motion'
import { useAnimationContext } from '@/store/animation-ctx'
import { useRouterContext } from '@/store/router-ctx'

const page = () => {
  const [variants, setVariants] = useState(null)
  const [firstRender, setFirstRender] = useState(false)

  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    let variantsObj

    if (!animationPosition?.x || !animationPosition?.y) {
      console.log(screenHeight, screenWidth)
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${965}px ${screenHeight / 2}px)`,
        },
        show: {
          clipPath: `circle(${
            screenWidth > screenHeight ? screenWidth : screenHeight
          }px at ${960}px ${screenHeight / 2}px)`,
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

    console.log(variantsObj)

    setVariants(variantsObj)
  }, [animationPosition])

  return (
    variants && (
      <m.main
        variants={variants}
        initial={'hidden'}
        animate={'show'}
        exit={{ opacity: 0.99 }}
        transition={{
          duration: 3,
          type: 'ease-out',
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
        className={`home ${animationFinished ? '' : 'test'}`}
      >
        <HeroSection />
        <CardsSection />
        <PortfolioSection />
        <Footer />
      </m.main>
    )
  )
}

export default page
