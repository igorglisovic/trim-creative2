import Container from '../UI/Container'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Trim from '../../public/aa.png'
import Button from '../UI/Button'
import Image from 'next/image'
import { KeyboardArrowDown } from '@mui/icons-material'
import Link from 'next/link'
import Circle from '../UI/Circle'
import { cardVariants } from '@/data/animations'

const CardsSection = ({ secondaryFont, content }) => {
  const [cards, setCards] = useState(content.cardsItems)

  const handleClick = index => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index && !card.active) return { ...card, active: true }
        if (i === index && card.active) return { ...card, active: false }
        else return card
      })
    )
  }

  return (
    <section className="bg-dark-gray py-20 relative">
      <Container className="absolute">
        <div className="relative">
          <Circle size={160} rotate={99} position={[0, 0, -300, -20]} z={100} />
          <Circle size={50} rotate={99} position={[0, 0, -260, 210]} z={-1} />
          <h2
            className={`text-white sm:text-4xl text-3xl text-center sm:text-left`}
          >
            {content.h2}
          </h2>
          <div className="flex flex-col-reverse lg:flex-row gap-6 mt-12">
            <div className="flex-1 grow-[1.2] min-h-[300px] rounded-[37px] overflow-hidden relative">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </div>
            <div className={`${secondaryFont?.className} flex-1`}>
              <ul className="flex flex-col gap-3">
                {cards?.map((card, i) => (
                  <li
                    className="px-7 rounded-[37px] bg-card-black text-white"
                    key={card.title}
                  >
                    <button
                      onClick={() => handleClick(i)}
                      className="flex justify-between items-center w-full py-4"
                      aria-label={card.title}
                    >
                      <h3
                        className={`text-2xl uppercase ${
                          card.active && 'font-bold'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <motion.div
                        variants={{
                          closed: {
                            rotate: 0,
                          },
                          open: {
                            rotate: '180deg',
                          },
                        }}
                        initial={cards[i].active ? 'open' : 'closed'}
                        animate={cards[i].active ? 'open' : 'closed'}
                      >
                        <KeyboardArrowDown
                          sx={{
                            stroke: card.active && 'white',
                            strokeWidth: card.active && '1px',
                          }}
                        />
                      </motion.div>
                    </button>
                    <motion.div
                      variants={cardVariants}
                      initial={cards[i].active ? 'open' : 'closed'}
                      animate={cards[i].active ? 'open' : 'closed'}
                      className="flex-col"
                    >
                      <p className="font-normal text-sm">{card.description}</p>
                      <Button
                        ariaLabel="Saznaj više"
                        className="uppercase mt-2 mb-4 self-end float-right"
                      >
                        <Link aria-label="Saznaj više" href={card.link}>
                          {content.button}
                        </Link>
                      </Button>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default CardsSection
