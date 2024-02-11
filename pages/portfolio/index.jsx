import { useAnimationContext } from '@/store/animation-ctx'
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import Footer from '@/components/Footer'
import PortfolioFilters from '@/components/PortfolioSections/PortfolioFilters'
import PortfolioCards from '@/components/PortfolioSections/PortfolioCards'
import { useRouter } from 'next/router'
import { usePortfolioContext } from '@/store/portfolio-ctx'

const portfolio = ({ mainFont, secondaryFont }) => {
  const [variants, setVariants] = useState(null)

  const router = useRouter()

  const { updateCurrentFilter } = usePortfolioContext()

  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
    updateAnimationPosition,
  } = useAnimationContext()

  useEffect(() => {
    const handleRouteChange = () => {
      setTimeout(() => {
        updateCurrentFilter(null)
      }, 2000)
    }

    // Listen to route changes and execute the handleRouteChange function
    router.events.on('routeChangeStart', handleRouteChange)

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [animationFinished])

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
    if (router.pathname !== '/portfolio') {
      setTimeout(() => {
        setRemoveComponent(true)
      }, 1800)
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
            exit={{ opacity: 0.99 }}
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
            className={`${animationFinished ? '' : 'page-transition'} ${
              mainFont.className
            } pt-[95px] dark:bg-dark`}
          >
            <PortfolioFilters secondaryFont={secondaryFont} />
            <PortfolioCards secondaryFont={secondaryFont} />
            <Footer secondaryFont={secondaryFont} />
          </m.main>
        )}
      </>
    )
  )
}

export default portfolio
