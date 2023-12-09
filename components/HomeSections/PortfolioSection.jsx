import Image from 'next/image'
import Container from '../UI/Container'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import { useState } from 'react'
import Trim from '../../public/aa.png'
import { useAnimationContext } from '@//store/animation-ctx'

const PortfolioSection = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0)

  const { animationFinished } = useAnimationContext()

  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion - 20])

  const whileHoverVariant = {
    show: {
      transition: { type: 'spring', stiffness: 300, damping: 50 },
      flex: '5 1 0',
    },
  }

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished) {
      setHookedYPosition(80)
    }
  })

  return (
    <section className="py-20">
      <Container>
        <div className="relative">
          {/* Circles */}
          <motion.div
            style={{ y: y1 }}
            className="bg-circle-gradient w-[300px] h-[300px] rounded-full absolute right-[-230px] bottom-[10%] z-0 rotate-[99.13deg]"
          ></motion.div>
          <motion.div
            style={{ y: y1 }}
            className="bg-circle-gradient w-[100px] h-[100px] rounded-full absolute left-[287px] bottom-[-120px] z-[1] rotate-[99.13deg]"
          ></motion.div>
          <motion.div
            style={{ y: y1 }}
            className="bg-circle-gradient w-[80px] h-[80px] rounded-full absolute right-[287px] top-[102px] z-[1] rotate-[99.13deg]"
          ></motion.div>

          <h2 className={`text-center sm:text-4xl text-3xl mb-12`}>
            Portfolio
          </h2>
          <div className="flex flex-col w-full md:flex-row gap-5 min-h-[600px]">
            <motion.div
              whileHover={{
                transition: { type: 'spring', stiffness: 300, damping: 50 },
                flex: '5 1 0',
              }}
              className="md:w-[300px] flex-1 rounded-[37px] overflow-hidden relative"
            >
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </motion.div>
            <motion.div
              whileHover={{
                transition: { type: 'spring', stiffness: 300, damping: 50 },
                flex: '5 1 0',
              }}
              className="md:w-[300px] flex-1 rounded-[37px] overflow-hidden relative"
            >
              <Image
                className="absolute z-[2] top-0 left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </motion.div>
            <motion.div
              whileHover={{
                transition: { type: 'spring', stiffness: 300, damping: 50 },
                flex: '5 1 0',
              }}
              className="md:w-[300px] flex-1 rounded-[37px] overflow-hidden relative"
            >
              <Image
                className="absolute top-0 z-[2] left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </motion.div>
            <motion.div
              whileHover={{
                transition: { type: 'spring', stiffness: 300, damping: 50 },
                flex: '5 1 0',
              }}
              className="md:w-[300px] flex-1 rounded-[37px] overflow-hidden relative"
            >
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={Trim}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default PortfolioSection
