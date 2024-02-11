import Image from 'next/image'
import Trim2 from '../../public/bmwm4.jpg'
import { useRouter } from 'next/navigation'
import { useAnimationContext } from '@/store/animation-ctx'

const PortfolioCard = ({ card }) => {
  const router = useRouter()

  const { updateAnimationPosition, animationFinished } = useAnimationContext()

  const handleClick = (e, card) => {
    if (!animationFinished) {
      e.preventDefault()
      return
    }

    updateAnimationPosition({ x: e.clientX, y: e.clientY })

    router.push(`/portfolio/${card.slug}`, { scroll: false })
  }

  return (
    <article
      onClick={e => handleClick(e, card)}
      className="flex flex-col gap-2 flex-1 min-w-[45%] cursor-pointer"
    >
      <Image className="rounded-[37px]" alt="" src={Trim2} />
      <h2 className="text-xl dark:text-dark">{card.title}</h2>
    </article>
  )
}

export default PortfolioCard
