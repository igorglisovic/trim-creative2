import PortfolioCard from './PortfolioCard'
import Container from '../UI/Container'
import { portfolio } from '@/data/portfolio'
import slugify from 'slugify'
import { useEffect, useState } from 'react'
import { usePortfolioContext } from '@/store/portfolio-ctx'

const initialCards = portfolio.map(card => {
  return { ...card, slug: slugify(card.title, { lower: true }) }
})

const PortfolioCards = ({ secondaryFont }) => {
  console.log(initialCards)
  const [cards, setCards] = useState(initialCards)

  const { currentFilter } = usePortfolioContext()

  useEffect(() => {
    if (!currentFilter) return

    setCards(prev => {
      console.log(
        initialCards.filter(card => card.filters.includes(currentFilter.id))
      )
      return initialCards.filter(card =>
        card.filters.includes(currentFilter.id)
      )
    })
  }, [currentFilter])

  return (
    <Container>
      <div
        className={`flex flex-wrap gap-x-5 gap-y-10 pb-12 ${secondaryFont.className}`}
      >
        {cards.map(card => (
          <PortfolioCard card={card} />
        ))}
      </div>
    </Container>
  )
}

export default PortfolioCards
