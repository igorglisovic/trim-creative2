import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import Main from '@/components/UI/Main'

const page = ({ mainFont, secondaryFont }) => {
  return (
    <Main mainFont={mainFont} path="/">
      <HeroSection secondaryFont={secondaryFont} />
      <CardsSection secondaryFont={secondaryFont} />
      <PortfolioSection />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default page
