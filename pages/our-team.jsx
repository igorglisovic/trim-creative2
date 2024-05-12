import Main from '@/components/UI/Main'
import Container from '@/components/UI/Container'
import OurTeamCards from '@/components/OurTeamSections/OurTeamCards'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import en from '@/data/locales/en'
import sr from '@/data/locales/sr'

const OurTeam = () => {
  const router = useRouter()
  const { locale } = router
  const content = locale === 'en' ? en : sr

  const { ourTeam } = content

  console.log(content)

  return (
    <Main path="/our-team">
      <div className="pt-6 pb-20">
        <OurTeamCards content={ourTeam} />
        <Container>
          <p className="mt-5 font-secondary text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Container>
      </div>
      <Footer />
    </Main>
  )
}

export default OurTeam
