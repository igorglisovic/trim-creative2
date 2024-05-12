import Main from '@/components/UI/Main'
import Footer from '../components/Footer'
import UslugeCards from '@/components/UslugeSections/UslugeCards'
import { useRouter } from 'next/router'
import en from '@/data/locales/en'
import sr from '@/data/locales/sr'

const page = () => {
  const router = useRouter()
  const { locale } = router
  const content = locale === 'en' ? en : sr

  const { services } = content

  return (
    <Main path="/services">
      <UslugeCards content={services} />
      <Footer />
    </Main>
  )
}

export default page
