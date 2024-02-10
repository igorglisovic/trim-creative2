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
  const { updateCurrentFilter, currentFilter } = usePortfolioContext()

  const handleFilterChange = filter => {
    if (filter.id === currentFilter?.id) return

    updateCurrentFilter({ ...filter, active: true })
  }

  return (
    <Container>
      <div className="pt-6 pb-12">
        <div className={`flex gap-6 w-full ${secondaryFont.className}`}>
          {initialFilters.map(filter => (
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
        {currentFilter && (
          <div className={`${secondaryFont.className}`}>
            <button
              onClick={() => {
                updateCurrentFilter(null)
              }}
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </Container>
  )
}

export default PortfolioFilters
