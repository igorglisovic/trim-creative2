import { useState } from 'react'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from 'framer-motion'
import Trim from '../../public/aa.png'
import Trim2 from '../../public/bmwm4.jpg'
import Button from '../UI/Button'
import Image from 'next/image'
import { useContainerContext } from '@/store/container-ctx'
import { useFontsContext } from '@//store/fonts-ctx'
import { useAnimationContext } from '@//store/animation-ctx'
import Container from '../UI/Container'
import H1 from '../UI/H1'

const HeroSection = () => {
  const [hookedYPostion, setHookedYPosition] = useState(0)

  const { containerWidth } = useContainerContext()
  const { gabaritoFont, akiraFont } = useFontsContext()
  const { animationFinished } = useAnimationContext()

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -hookedYPostion - 20])

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (animationFinished) {
      setHookedYPosition(80)
    }
  })

  return (
    <Container>
      <div className="flex flex-col gap-6 pt-6 pb-20">
        <section>
          <div className="w-full relative">
            {/* Circles */}
            <motion.div
              style={{ y }}
              className="bg-circle-gradient w-[200px] h-[200px] rounded-full absolute right-[-130px] top-[-60px] z-20 rotate-[-176.47deg]"
            ></motion.div>
            <H1>
              Odsecite vasu <br /> konkurenciju
            </H1>
          </div>
          <div
            className={`${gabaritoFont?.className} flex flex-col md:flex-row md:text-left text-center lg:gap-10 gap-8 mt-14 relative`}
          >
            {/* Circles */}
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[130px] h-[130px] rounded-full absolute left-[47%] top-[40%] z-20 rotate-[99.13deg]"
            ></motion.div>
            <motion.div
              style={{ y }}
              className="bg-circle-gradient w-[70px] h-[70px] rounded-full absolute right-[5%] top-[-55px] z-20 rotate-[-2.4deg]"
            ></motion.div>
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[170px] h-[170px] lg:w-[300px] lg:h-[300px] rounded-full absolute left-[-150px] top-[-95px] z-50 rotate-[43.97deg]"
            ></motion.div>
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[60px] h-[60px] rounded-full absolute left-[-25px] top-[365px] z-10 rotate-[43.97deg]"
            ></motion.div>
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[160px] h-[160px] rounded-full absolute right-[0] bottom-[-470px] z-50 rotate-[99.13deg]"
            ></motion.div>
            <motion.div
              style={{ y: y1 }}
              className="bg-circle-gradient w-[55px] h-[55px] rounded-full absolute left-[200px] bottom-[-420px] z-[-10] rotate-[99.13deg]"
            ></motion.div>

            <div className="flex relative pb-[38.55%] overflow-hidden flex-1 shadow-md rounded-[38px]">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
                alt=""
                src={Trim}
              />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex relative pb-[56.25%] overflow-hidden w-full shadow-md rounded-[38px] z-10">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt=""
                  src={Trim2}
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="md:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum fuga modi, inventore cupiditate natus eius accusamus
                  voluptatum iure ipsa quod tempora eaque molestias impedit
                  totam magni veniam doloribus sunt praesentium.
                </p>
                <Button className="md:self-end self-center">Saznaj više</Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex relative pb-[20.55%] min-h-[180px] overflow-hidden w-full shadow-md rounded-[38px]">
            <Image
              src={Trim}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover z-30"
            />
          </div>
        </section>
      </div>
    </Container>
  )
}

export default HeroSection
