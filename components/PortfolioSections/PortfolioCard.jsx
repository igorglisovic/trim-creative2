import Image from 'next/image'
import RouteLink from '../UI/RouteLink'

const PortfolioCard = ({ card }) => {
  return (
    <article className={`flex flex-col gap-2 flex-1 min-w-[45%]`}>
      <RouteLink href={`/portfolio/${card?.slug}`}>
        <Image
          className="rounded-[37px]"
          alt={card?.title}
          src={card?.thumbnail}
        />
        <h2 className="text-xl dark:text-dark">{card?.title}</h2>
      </RouteLink>
    </article>
  )
}

export default PortfolioCard
