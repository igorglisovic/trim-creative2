import Image from 'next/image'
import Trim2 from '../../public/bmwm4.jpg'
import { useRouter } from 'next/navigation'

const PortfolioCard = ({ card }) => {
  const router = useRouter()

  const handleClick = card => {
    router.push(`/portfolio/${card.slug}`)
  }

  return (
    <article
      onClick={() => handleClick(card)}
      className="flex flex-col gap-2 flex-1 min-w-[45%] cursor-pointer"
    >
      <Image className="rounded-[37px]" alt="" src={Trim2} />
      <h2 className="text-xl">{card.title}</h2>
    </article>
  )
}

export default PortfolioCard
