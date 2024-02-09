import Image from 'next/image'
import Trim2 from '../../public/bmwm4.jpg'
import Container from '../UI/Container'

const PortfolioTitleSection = ({ project, secondaryFont }) => {
  return (
    <Container>
      <section className="flex flex-col gap-9 mt-3">
        <div className="flex relative pb-[18.55%] min-h-[180px] overflow-hidden w-full shadow-md rounded-[38px]">
          <Image
            src={Trim2}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        </div>
        <h1 className="text-4xl text-center">{project?.title}</h1>
        <p className={`${secondaryFont.className} text-xl`}>
          {project?.description}
        </p>
      </section>
    </Container>
  )
}

export default PortfolioTitleSection
