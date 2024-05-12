import HeroSection from '../components/HomeSections/HeroSection'
import CardsSection from '../components/HomeSections/CardsSection'
import PortfolioSection from '../components/HomeSections/PortfolioSection'
import Footer from '../components/Footer'
import Main from '@/components/UI/Main'
import { useRouter } from 'next/router'
import en from '@/data/locales/en'
import sr from '@/data/locales/sr'

const page = () => {
  const router = useRouter()
  const { locale } = router
  const content = locale === 'en' ? en : sr

  const { hero, cards, portfolio } = content.home

  console.log(hero, cards, portfolio, content)

  return (
    <Main path="/">
      <HeroSection content={hero} />
      <CardsSection content={cards} />
      <PortfolioSection content={portfolio} />
      <Footer content={content} />
    </Main>
  )
}

export default page
