import Container from '../UI/Container'
import { portfolioFilters } from '@/data/portfolio'
import slugify from 'slugify'
import Button from '../UI/Button'
import { usePortfolioContext } from '@/store/portfolio-ctx'

const initialFilters = portfolioFilters.map(filter => {
  return { ...filter, slug: slugify(filter.title, { lower: true }) }
})

const PortfolioFilters = () => {
  const { updateCurrentFilter, currentFilter } = usePortfolioContext()

  const handleFilterChange = filter => {
    if (filter.id === currentFilter?.id) {
      updateCurrentFilter(null)
      return
    }

    updateCurrentFilter({ ...filter, active: true })
  }

  return (
    <Container>
      <div className="pt-6 sm:pb-12 pb-8">
        <div
          className={`grid lg:grid-cols-4 grid-cols-2 md:gap-x-6 md:gap-y-4 gap-x-3 gap-y-3 w-full font-secondary`}
        >
          {initialFilters.map(filter => (
            <button
              onClick={() => handleFilterChange(filter)}
              className={`sm:text-base text-[15px] px-3 py-3 rounded-full dark:border-dark border-black border text-black dark:text-dark ${
                filter.id === currentFilter?.id
                  ? 'font-extrabold bg-main-gradient text-white'
                  : 'font-medium'
              }`}
              key={filter.id}
              ariaLabel={filter.title}
            >
              {filter.title}
            </button>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default PortfolioFilters
