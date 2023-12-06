'use client'

import { useEffect, useState } from 'react'
import Container from '../components/UI/Container'
import H1 from '../components/UI/H1'
import UslugeCard from '../components/UslugeSections/UslugeCard'
import { uslugeCards } from '../data/cards'
import Footer from '../components/Footer'
import { AnimatePresence, motion as m } from 'framer-motion'
import { useAnimationContext } from '@/store/animation-ctx'
import UslugeCards from '@/components/UslugeSections/UslugeCards'

const page = () => {
  const [cards, setCards] = useState(uslugeCards)
  const [variants, setVariants] = useState()

  let {
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
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
        },
        show: {
          clipPath: `circle(${
            screenWidth > screenHeight ? screenWidth : screenHeight
          }px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
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
        className={`usluge ${animationFinished ? '' : 'test'}`}
      >
        <UslugeCards />
        <Footer />
      </m.main>
    )
  )
}

export default page
