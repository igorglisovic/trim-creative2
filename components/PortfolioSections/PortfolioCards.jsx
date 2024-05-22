import PortfolioCard from './PortfolioCard'
import Container from '../UI/Container'
import { portfolio } from '@/data/portfolio'
import slugify from 'slugify'
import { useEffect, useState } from 'react'
import { usePortfolioContext } from '@/store/portfolio-ctx'

const initialCards = portfolio.map(card => {
  return { ...card, slug: slugify(card.title, { lower: true }) }
})

const PortfolioCards = () => {
  const [cards, setCards] = useState(initialCards)
  const [otherCards, setOtherCards] = useState([])
  const [prevFilter, setPrevFilter] = useState(undefined)

  const [otherCardsAnimFinished, setOtherCardsAnimFinished] = useState(false)

  const { currentFilter } = usePortfolioContext()

  useEffect(() => {
    console.log(prevFilter, currentFilter)
    setPrevFilter(currentFilter)
    if (!currentFilter) {
      setOtherCards([])
      return setCards(initialCards)
    }

    if (prevFilter === null && currentFilter) {
      setOtherCards(() => {
        return cards.filter(card => !card.filters.includes(currentFilter.id))
      })
    }

    setCards(() => {
      return initialCards.filter(card => card.filters.includes(currentFilter.id))
    })
  }, [currentFilter])

  useEffect(() => {
    if (otherCardsAnimFinished) {
      setOtherCards([])
    }
  }, [otherCardsAnimFinished])

  useEffect(() => {}, [otherCards])

  return (
    <Container>
      <div className={`grid sm:grid-cols-2 grid-cols-1 gap-x-5 sm:gap-y-10 gap-y-6 font-secondary`}>
        {cards.map(card => (
          <PortfolioCard key={card.title} card={card} />
        ))}
        {otherCards.map(card => (
          <PortfolioCard
            key={card.title}
            card={card}
            loading={true}
            setOtherCardsAnimFinished={setOtherCardsAnimFinished}
          />
        ))}
      </div>
    </Container>
  )
}

export default PortfolioCards
