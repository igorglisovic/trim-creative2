import Image from 'next/image'
import RouteLink from '../UI/RouteLink'
import { motion as m } from 'framer-motion'

const PortfolioCard = ({ card, loading = false, setOtherCardsAnimFinished }) => {
  const getRandomTransformOrigin = () => {
    const value = (16 + 40 * Math.random()) / 100
    const value2 = (15 + 36 * Math.random()) / 100
    return {
      originX: value,
      originY: value2,
    }
  }

  const loadingVariants = {
    open: i => ({
      opacity: 1,
      rotate: i % 2 === 0 ? [-3, 1.3, 0] : [3, -0.6, 0],
    }),
    close: {
      rotate: 0,
      opacity: 0,
    },
  }

  return !loading ? (
    <m.article
      variants={loadingVariants}
      initial={'close'}
      animate={'open'}
      transition={{
        duration: 0.7,
        ease: 'easeOut',
      }}
      className={`flex flex-col gap-2`}
      style={{ ...getRandomTransformOrigin }}
    >
      <RouteLink href={`/portfolio/${card?.slug}`}>
        <Image className="rounded-[37px]" alt={card?.title} src={card?.thumbnail} />
        <h2 className="text-xl dark:text-dark sm:text-left text-center">{card?.title}</h2>
      </RouteLink>
    </m.article>
  ) : (
    <m.article
      variants={loadingVariants}
      initial={'open'}
      animate={'close'}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        // type: 'spring',
      }}
      onAnimationStart={() => {
        setOtherCardsAnimFinished(false)
      }}
      onAnimationComplete={() => {
        setOtherCardsAnimFinished(true)
      }}
      className={`flex flex-col gap-2 flex-1 min-w-[45%]`}
      style={{ ...getRandomTransformOrigin }}
    >
      <div>
        <Image className="rounded-[37px]" alt={card?.title} src={card?.thumbnail} />
        <h2 className="text-xl dark:text-dark sm:text-left text-center">{card?.title}</h2>
      </div>
    </m.article>
  )
}

export default PortfolioCard
