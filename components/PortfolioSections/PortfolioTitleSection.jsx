import Image from 'next/image'
import Container from '../UI/Container'

const PortfolioTitleSection = ({ project }) => {
  return (
    <Container>
      <section className="flex flex-col gap-11 mt-3 dark:text-dark">
        <div className="flex relative pb-[18.55%] min-h-[180px] overflow-hidden w-full shadow-md rounded-[38px]">
          <Image
            src={project?.images[0]}
            alt={project?.title + 'Image'}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        </div>
        <h1 className="text-4xl text-center dark:text-dark">{project?.title}</h1>
        <p className={`font-secondary text-xl`}>{project?.description}</p>
      </section>
    </Container>
  )
}

export default PortfolioTitleSection
