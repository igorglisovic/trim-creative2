import Main from '@/components/UI/Main'
import Footer from '../components/Footer'
import UslugeCards from '@/components/UslugeSections/UslugeCards'
import useLocalization from '@/components/hooks/useLocalization'

const page = ({ mainFont, secondaryFont }) => {
  const {
    content: { usluge },
  } = useLocalization()

  return (
    <Main mainFont={mainFont} path="/usluge">
      <UslugeCards secondaryFont={secondaryFont} content={usluge} />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default page
