import Container from '../UI/Container'
import Image from 'next/image'
import PortfolioGalleryLeft from './PortfolioGalleryLeft'
import PortfolioGalleryRight from './PortfolioGalleryRight'

const PortfolioGallerySection = ({ project }) => {
  const images = project?.images.slice(1)

  const imagePairs = []

  for (let i = 0; i < images?.length; i += 2) {
    if (i + 1 < images?.length) {
      imagePairs.push([images[i], images[i + 1]])
    } else {
      imagePairs.push([images[i]])
    }
  }

  return (
    <Container>
      <section className="flex flex-col pt-12 pb-20 gap-6">
        <div className="flex relative pb-[40.55%] min-h-[180px] overflow-hidden w-full shadow-md rounded-[38px]">
          {project?.images[0] && (
            <Image
              src={project?.images[0]}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover z-30"
            />
          )}
        </div>
        {imagePairs?.map((imagePair, i) => {
          if (i % 2) {
            return (
              <PortfolioGalleryLeft
                key={i}
                images={[imagePair[0], imagePair[1]]}
              />
            )
          } else {
            return (
              <PortfolioGalleryRight
                key={i}
                images={[imagePair[0], imagePair[1]]}
              />
            )
          }
        })}
      </section>
    </Container>
  )
}

export default PortfolioGallerySection
