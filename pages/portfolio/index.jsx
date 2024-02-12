import { useAnimationContext } from '@/store/animation-ctx'
import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import Footer from '@/components/Footer'
import PortfolioFilters from '@/components/PortfolioSections/PortfolioFilters'
import PortfolioCards from '@/components/PortfolioSections/PortfolioCards'
import { useRouter } from 'next/router'
import { usePortfolioContext } from '@/store/portfolio-ctx'
import Main from '@/components/UI/Main'

const portfolio = ({ mainFont, secondaryFont }) => {
  const { updateCurrentFilter } = usePortfolioContext()
  const { animationFinished } = useAnimationContext()

  const router = useRouter()

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

  return (
    <Main mainFont={mainFont} path="/portfolio">
      <PortfolioFilters secondaryFont={secondaryFont} />
      <PortfolioCards secondaryFont={secondaryFont} />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default portfolio
