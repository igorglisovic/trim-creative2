import { useAnimationContext } from '@/store/animation-ctx'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import PortfolioFilters from '@/components/PortfolioSections/PortfolioFilters'
import PortfolioCards from '@/components/PortfolioSections/PortfolioCards'
import { useRouter } from 'next/router'
import { usePortfolioContext } from '@/store/portfolio-ctx'
import Main from '@/components/UI/Main'
import H1 from '@/components/UI/H1'

const portfolio = () => {
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
    <Main path="/portfolio">
      <div className="pt-6 pb-10">
        <H1
          variants={{
            closed: {
              transform: `translateX(-20px)`,
            },
            open: {
              transform: 'translateX(0)',
            },
          }}
        >
          Portfolio
        </H1>
        <PortfolioFilters />
        <PortfolioCards />
      </div>
      <Footer />
    </Main>
  )
}

export default portfolio
