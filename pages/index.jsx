import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import Main from '@/components/UI/Main'
import useLocalization from '@/components/hooks/useLocalization'

const page = () => {
  const {
    content: {
      pocetna: { hero, cards, portfolio },
    },
  } = useLocalization()

  console.log(hero)

  return (
    <Main path="/">
      <HeroSection content={hero} />
      <CardsSection content={cards} />
      <PortfolioSection content={portfolio} />
      <Footer />
    </Main>
  )
}

export default page
