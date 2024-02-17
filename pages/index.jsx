import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import Main from '@/components/UI/Main'
import useLocalization from '@/components/hooks/useLocalization'

const page = ({ mainFont, secondaryFont }) => {
  const {
    content: {
      pocetna: { hero, cards, portfolio },
    },
  } = useLocalization()

  return (
    <Main mainFont={mainFont} path="/">
      <HeroSection secondaryFont={secondaryFont} content={hero} />
      <CardsSection secondaryFont={secondaryFont} content={cards} />
      <PortfolioSection content={portfolio} />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default page
