import { useState } from 'react'
import Container from '../UI/Container'
import UslugeCard from './UslugeCard'
import H1 from '../UI/H1'

const UslugeCards = ({ content }) => {
  const [cards, setCards] = useState(content.cardsItems)

  return (
    <Container>
      <div className="pt-6">
        <H1
          variants={{
            closed: {
              transform: `translateX(-20px)`,
            },
            open: {
              transform: 'translateX(0)',
            },
          }}
        >
          {content.h1}
        </H1>
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
