'use client'

import { useEffect, useState } from 'react'
import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import { motion as m } from 'framer-motion'
import { useAnimationContext } from '@/store/animation-ctx'
import Lenis from '@studio-freight/lenis'
import { useHeaderContext } from '@/store/header-ctx'
import Head from 'next/head'
import { useRouter } from 'next/router'

const page = ({ mainFont, secondaryFont }) => {
  const [variants, setVariants] = useState(null)

  const router = useRouter()

  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

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

  const [removeComponent, setRemoveComponent] = useState(false)

  useEffect(() => {
    if (router.pathname !== '/') {
      setTimeout(() => {
        setRemoveComponent(true)
      }, 1500)
    }
  }, [router])

  return (
    variants && (
      <>
        {!removeComponent && (
          <m.main
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            exit={{ transform: 'translateX(1px)' }}
            transition={{
              duration: 2,
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
            className={`home ${
              animationFinished ? 'relative' : 'page-transition absolute'
            } ${mainFont.className}  pt-[95px]`}
          >
            <HeroSection secondaryFont={secondaryFont} />
            <CardsSection secondaryFont={secondaryFont} />
            <PortfolioSection />
            <Footer secondaryFont={secondaryFont} />
          </m.main>
        )}
      </>
    )
  )
}

export default page
