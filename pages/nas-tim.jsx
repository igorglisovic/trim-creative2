import Main from '@/components/UI/Main'
import Container from '@/components/UI/Container'
import OurTeamCards from '@/components/OurTeamSections/OurTeamCards'
import H1 from '@/components/UI/H1'
import useLocalization from '@/components/hooks/useLocalization'

const NasTim = () => {
  const {
    content: { nasTim },
  } = useLocalization()

  return (
    <Main path="/nas-tim">
      <Container>
        <div className="pt-6 pb-20">
          <H1>{nasTim.h1}</H1>
          <OurTeamCards content={nasTim} />
        </div>
      </Container>
    </Main>
  )
}

export default NasTim
