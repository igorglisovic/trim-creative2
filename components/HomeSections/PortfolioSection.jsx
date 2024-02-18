import Image from 'next/image'
import Container from '../UI/Container'
import { motion } from 'framer-motion'
import Trim from '../../public/aa.png'
import Circle from '../UI/Circle'

const PortfolioSection = ({ content }) => {
  return (
    <section className="py-20">
      <Container>
        <div className="relative">
          <Circle
            size={824}
            position={[200, 0, 0, -676]}
            z={0}
            className="bg-[#302839] blur-[200px] opacity-60"
          />
          <Circle size={300} rotate={99} position={[0, -230, '-5%', 0]} z={0} />
          <Circle size={100} rotate={99} position={[0, 0, -230, 287]} z={1} />
          <Circle size={80} rotate={99} position={[242, 287, 0, 0]} z={1} />
          <h2
            className={`text-center sm:text-4xl text-3xl mb-12 dark:text-dark`}
          >
            {content.h2}
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
