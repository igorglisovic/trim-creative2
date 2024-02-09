import React from 'react'
import PortfolioCard from './PortfolioCard'
import Container from '../UI/Container'

const PortfolioCards = ({ secondaryFont }) => {
  return (
    <Container>
      <div
        className={`flex gap-x-5 gap-y-9 flex-wrap ${secondaryFont.className}`}
      >
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </Container>
  )
}

export default PortfolioCards
