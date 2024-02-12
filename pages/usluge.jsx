import Main from '@/components/UI/Main'
import Footer from '../components/Footer'
import UslugeCards from '@/components/UslugeSections/UslugeCards'

const page = ({ mainFont, secondaryFont }) => {
  return (
    <Main mainFont={mainFont} path="/usluge">
      <UslugeCards secondaryFont={secondaryFont} />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default page
