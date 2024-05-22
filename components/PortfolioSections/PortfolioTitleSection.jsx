import Image from 'next/image'
import Container from '../UI/Container'

const PortfolioTitleSection = ({ project }) => {
  return (
    <Container>
      <section className="flex flex-col sm:gap-11 gap-5 mt-3 dark:text-dark">
        <div className="flex relative pb-[18.55%] min-h-[180px] overflow-hidden w-full shadow-md sm:rounded-[38px] rounded-2xl">
          <Image
            src={project?.images[0]}
            alt={project?.title + 'Image'}
            className="absolute top-0 left-0 w-full h-full object-cover z-30"
          />
        </div>
        <h1 className="sm:text-4xl text-3xl text-center dark:text-dark">{project?.title}</h1>
        <p className={`font-secondary`}>{project?.description}</p>
      </section>
    </Container>
  )
}

export default PortfolioTitleSection
