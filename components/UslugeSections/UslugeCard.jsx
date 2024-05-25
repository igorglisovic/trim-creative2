import { East, North, South, West } from '@mui/icons-material'
import Trim from '../../public/aa.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { uslugeCardVariants as cardVariants } from '@/data/animations'
import { uslugeCardVariantsMobile as cardVariantsMobile } from '@/data/animations'
import { useEffect, useState } from 'react'

const UslugeCard = ({ card, cards, setCards, index }) => {
  const [mediaMatches, setMediaMatches] = useState(false)
  const [media, setMedia] = useState(false)

  useEffect(() => {
    setMedia(window.matchMedia('(max-width: 768px)'))
  }, [])

  const getMediaMatches = () => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
  }

  useEffect(() => {
    getMediaMatches()
    window.addEventListener('resize', getMediaMatches)
  }, [media])

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
          className={`flex md:flex-row flex-col xl:gap-7 md:gap-5 gap-4 font-secondary md:min-h-[320px] min-h-[500px]`}
        >
          <motion.div
            variants={mediaMatches ? cardVariantsMobile : cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 flex flex-col md:items-start items-center bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <h2 className="md:text-4xl text-3xl font-bold font-main mb-4 md:w-[50%] w-full md:text-left text-center uppercase">
              {card.title}
            </h2>
            <p className="md:mb-5 mb-0 three-line-ellipsis md:text-left text-center ">
              {card.description}
            </p>
            <button
              className="px-[0.9em] border-0 float-right flex rounded-full bg-arrow md:self-end self-center mt-auto"
              onClick={handleClick}
              aria-label="Open card"
            >
              <div className="md:visible md:block invisible hidden">
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
              </div>
              <div className="visible block md:invisible md:hidden">
                {!card.active ? (
                  <South
                    sx={{
                      color: 'rgba(255, 255, 255, 0.48)',
                      fontSize: '1.9rem',
                    }}
                  />
                ) : (
                  <North
                    sx={{
                      color: 'rgba(255, 255, 255, 0.48)',
                      fontSize: '1.9rem',
                    }}
                  />
                )}
              </div>
            </button>
          </motion.div>
          <motion.div
            variants={mediaMatches ? cardVariantsMobile : cardVariants}
            initial={!card.active ? 'open' : 'closed'}
            animate={!card.active ? 'open' : 'closed'}
            className="min-h-fit flex-1 grow-[3.5] relative rounded-[37px] overflow-hidden"
          >
            <Image className="absolute top-0 left-0 w-full h-full object-cover" src={Trim} alt="" />
          </motion.div>
        </section>
      ) : (
        <section
          className={`flex md:flex-row-reverse flex-col xl:gap-7 md:gap-5 gap-4 md:min-h-[320px] min-h-[500px] font-secondary`}
        >
          <motion.div
            variants={mediaMatches ? cardVariantsMobile : cardVariants}
            initial={card.active ? 'open' : 'closed'}
            animate={card.active ? 'open' : 'closed'}
            className="flex-1 flex flex-col md:items-end items-center bg-main-gradient rounded-[37px] p-8 text-white"
          >
            <div className="text-right">
              <h2 className="md:text-4xl text-3xl font-main font-bold mb-4 md:w-[90%] w-full float-right uppercase md:text-right text-center">
                {card.title}
              </h2>
            </div>
            <p className="md:mb-5 mb-0 three-line-ellipsis md:text-right text-center">
              {card.description}
            </p>
            <button
              onClick={handleClick}
              className="px-[0.9em] border-0 md:self-start self-center mt-auto flex rounded-full bg-arrow"
              aria-label="Open card"
            >
              <div className="md:visible md:block invisible hidden">
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
              </div>
              <div className="visible block md:invisible md:hidden">
                {!card.active ? (
                  <South
                    sx={{
                      color: 'rgba(255, 255, 255, 0.48)',
                      fontSize: '1.9rem',
                    }}
                  />
                ) : (
                  <North
                    sx={{
                      color: 'rgba(255, 255, 255, 0.48)',
                      fontSize: '1.9rem',
                    }}
                  />
                )}
              </div>
            </button>
          </motion.div>
          <motion.div
            variants={mediaMatches ? cardVariantsMobile : cardVariants}
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
