import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/UI/Breadcrumb'
import PortfolioTitleSection from '@/components/PortfolioSections/PortfolioTitleSection'
import { portfolio } from '@/data/portfolio'
import slugify from 'slugify'
import PortfolioGallerySection from '@/components/PortfolioSections/PortfolioGallerySection'
import { portfolioFilters } from '@/data/portfolio'
import Main from '@/components/UI/Main'

const initialCards = portfolio.map(card => {
  return { ...card, slug: slugify(card.title, { lower: true }) }
})

const PortfolioProject = ({ mainFont, secondaryFont }) => {
  const router = useRouter()

  const [project, setProject] = useState(null)
  const [projectFilter, setProjectFilter] = useState(null)

  useEffect(() => {
    if (router.query.id) {
      setProject(initialCards.find(el => el.slug === router.query.id))
    }
  }, [initialCards, router.query.id, portfolioFilters])

  useEffect(() => {
    if (project)
      setProjectFilter(
        portfolioFilters.find(el => el.id === project?.filters[0])
      )
  }, [project, portfolioFilters, router.query.id])

  return (
    <Main mainFont={mainFont} path="/portfolio/[id]">
      {project && projectFilter && (
        <Breadcrumb
          items={[
            { link: '/portfolio', title: 'Portfolio' },
            { link: null, title: projectFilter?.title },
            { link: null, title: project?.title },
          ]}
          font={secondaryFont}
        />
      )}
      <PortfolioTitleSection project={project} secondaryFont={secondaryFont} />
      <PortfolioGallerySection project={project} />
      <Footer secondaryFont={secondaryFont} />
    </Main>
  )
}

export default PortfolioProject
