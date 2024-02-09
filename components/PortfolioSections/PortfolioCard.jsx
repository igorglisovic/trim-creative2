import Image from 'next/image'
import Trim2 from '../../public/bmwm4.jpg'

const PortfolioCard = () => {
  return (
    <article className="flex flex-col gap-2 flex-1 min-w-[45%]">
      <Image className="rounded-[37px]" alt="" src={Trim2} />
      <h2 className="text-xl">Golijska ledena</h2>
    </article>
  )
}

export default PortfolioCard
