import Main from '@/components/UI/Main'
import Footer from '../components/Footer'
import UslugeCards from '@/components/UslugeSections/UslugeCards'
import useLocalization from '@/components/hooks/useLocalization'

const page = () => {
  const {
    content: { usluge },
  } = useLocalization()

  return (
    <Main path="/usluge">
      <UslugeCards content={usluge} />
      <Footer />
    </Main>
  )
}

export default page
