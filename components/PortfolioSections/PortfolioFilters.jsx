import React, { useEffect, useState } from 'react'
import Container from '../UI/Container'
import { portfolioFilters } from '@/data/portfolio'
import slugify from 'slugify'
import Button from '../UI/Button'
import { usePortfolioContext } from '@/store/portfolio-ctx'

const initialFilters = portfolioFilters.map(filter => {
  return { ...filter, slug: slugify(filter.title, { lower: true }) }
})

const PortfolioFilters = ({ secondaryFont }) => {
  const [filters, setFilters] = useState(initialFilters)

  const { updateCurrentFilter, currentFilter } = usePortfolioContext()

  const handleFilterChange = filter => {
    if (filter.id === currentFilter?.id) return

    updateCurrentFilter({ ...filter, active: true })
  }

  useEffect(() => {
    console.log(filters)
  }, [filters])

  return (
    <Container>
      <div
        className={`flex gap-6 pt-6 pb-12 w-full ${secondaryFont.className}`}
      >
        {filters.map(filter => (
          <Button
            onClick={() => handleFilterChange(filter)}
            className={`flex-1 !text-base ${
              filter.id === currentFilter?.id
                ? '!font-extrabold'
                : '!font-medium'
            }`}
            key={filter.id}
          >
            {filter.title}
          </Button>
        ))}
      </div>
    </Container>
  )
}

export default PortfolioFilters
