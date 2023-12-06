import { East, West } from '@mui/icons-material'
import Trim from '../../public/aa.png'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const UslugeCard = ({ card, cards, setCards, index }) => {
  const [clickedCard, setClickedCard] = useState(card)

  const cardVariants = {
    closed: {
      flexGrow: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 60,
      },
    },
    open: {
      flexGrow: 2.5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const handleClick = () => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index && !card.active) return { ...card, active: true }
        if (i === index && card.active) return { ...card, active: !card.active }
        else return card
      })
    )

    setClickedCard(
      ...cards.filter((card, i) => {
        if (i === index) return card
      })
    )
  }

  return (
    <>
      {card.type ? (
        <section className="flex gap-7">
          <motion.div
            variants={cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <h2 className="text-4xl font-bold mb-4 w-[50%]">{card.title}</h2>
            <p className="mb-5 three-line-ellipsis">{card.description}</p>
            <button
              className="px-[0.9em] border-0 float-right flex rounded-full bg-arrow"
              onClick={handleClick}
            >
              {!card.active ? (
                <East
                  sx={{
                    color: 'rgba(255, 255, 255, 0.48)',
                    fontSize: '1.9rem',
                  }}
                />
              ) : (
                <West
                  sx={{
                    color: 'rgba(255, 255, 255, 0.48)',
                    fontSize: '1.9rem',
                  }}
                />
              )}
            </button>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={!card.active ? 'open' : 'closed'}
            animate={!card.active ? 'open' : 'closed'}
            className="flex-1 grow-[3.5] relative rounded-[37px] overflow-hidden"
          >
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={Trim}
              alt=""
            />
          </motion.div>
        </section>
      ) : (
        <section className="flex flex-row-reverse gap-7">
          <motion.div
            variants={cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 flex flex-col items-end bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <div className="text-right">
              <h2 className="text-4xl font-bold mb-4 w-[90%] float-right">
                {card.title}
              </h2>
            </div>
            <p className="mb-5 three-line-ellipsis text-right">
              {card.description}
            </p>
            <button
              onClick={handleClick}
              className="px-[0.9em] border-0 self-start flex rounded-full bg-arrow"
            >
              {card.active ? (
                <East
                  sx={{
                    color: 'rgba(255, 255, 255, 0.48)',
                    fontSize: '1.9rem',
                  }}
                />
              ) : (
                <West
                  sx={{
                    color: 'rgba(255, 255, 255, 0.48)',
                    fontSize: '1.9rem',
                  }}
                />
              )}
            </button>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial={!card.active ? 'open' : 'closed'}
            animate={!card.active ? 'open' : 'closed'}
            className="flex-1 grow-[3.5] relative rounded-[37px] overflow-hidden"
          >
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={Trim}
              alt=""
            />
          </motion.div>
        </section>
      )}
    </>
  )
}

export default UslugeCard
