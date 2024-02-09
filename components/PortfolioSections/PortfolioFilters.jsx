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

  const { updateCurrentFilter } = usePortfolioContext()

  const handleFilterChange = filter => {
    if (filter.active) return

    setFilters(prev => {
      return prev.map(el => {
        if (el.id === filter.id) {
          return { ...filter, active: true }
        } else {
          return { ...el, active: false }
        }
      })
    })

    updateCurrentFilter(filter)
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
              filter.active ? '!font-bold' : '!font-medium'
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
