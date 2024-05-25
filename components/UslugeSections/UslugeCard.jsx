import { East, West } from '@mui/icons-material'
import Trim from '../../public/aa.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uslugeCardVariants as cardVariants } from '@/data/animations'

const UslugeCard = ({ card, cards, setCards, index }) => {
  const handleClick = () => {
    setCards(
      cards.map((card, i) => {
        if (card.active && i !== index) return { ...card, active: false }
        if (i === index && !card.active) return { ...card, active: true }
        if (i === index && card.active) return { ...card, active: !card.active }
        else return card
      })
    )
  }

  return (
    <>
      {card.type ? (
        <section
          className={`flex md:flex-row flex-col xl:gap-7 md:gap-5 gap-4 font-secondary md:min-h-[320px] min-h-[350px]`}
        >
          <motion.div
            variants={cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 flex flex-col bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <h2 className="text-4xl font-bold font-main mb-4 w-[50%] uppercase">{card.title}</h2>
            <p className="mb-5 three-line-ellipsis">{card.description}</p>
            <button
              className="px-[0.9em] border-0 float-right flex rounded-full bg-arrow self-end mt-auto"
              onClick={handleClick}
              aria-label="Open card"
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
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src={Trim} alt="" />
          </motion.div>
        </section>
      ) : (
        <section
          className={`flex md:flex-row-reverse flex-col xl:gap-7 md:gap-5 gap-4 md:min-h-[320px] min-h-[350px] font-secondary`}
        >
          <motion.div
            variants={cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 flex flex-col items-end bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <div className="text-right">
              <h2 className="text-4xl font-main font-bold mb-4 w-[90%] float-right uppercase">
                {card.title}
              </h2>
            </div>
            <p className="mb-5 three-line-ellipsis text-right">{card.description}</p>
            <button
              onClick={handleClick}
              className="px-[0.9em] border-0 self-start mt-auto flex rounded-full bg-arrow"
              aria-label="Open card"
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
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src={Trim} alt="" />
          </motion.div>
        </section>
      )}
    </>
  )
}

export default UslugeCard
