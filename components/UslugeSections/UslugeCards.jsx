import { useState } from 'react'
import Container from '../UI/Container'
import UslugeCard from './UslugeCard'
import { uslugeCards } from '../../data/cards'
import H1 from '../UI/H1'

const UslugeCards = () => {
  const [cards, setCards] = useState(uslugeCards)

  return (
    <Container>
      <div className="pt-6 pb-20">
        <H1>Nase usluge</H1>
        <div className="flex flex-col gap-7 mt-12">
          {cards?.map((card, index) => (
            <UslugeCard
              key={card.title}
              cards={cards}
              card={card}
              setCards={setCards}
              index={index}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default UslugeCards
