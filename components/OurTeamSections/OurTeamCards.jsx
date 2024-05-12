import Image from 'next/image'
import Container from '../UI/Container'
import { motion } from 'framer-motion'
import { Email, Instagram, LinkedIn } from '@mui/icons-material'
import Link from 'next/link'
import { useState } from 'react'
import H1 from '../UI/H1'

const OurTeamCards = ({ content }) => {
  const [isHovered, setIsHovered] = useState(null)

  return (
    <section>
      <Container>
        <div className="relative">
          <H1>{content.h1}</H1>
          <h2 className={`text-center sm:text-4xl text-3xl mb-12 dark:text-dark`}>{content.h2}</h2>
          <div className="flex flex-col w-full md:flex-row gap-5 min-h-[800px]">
            {content.cardsItems.map(item => (
              <motion.div
                whileHover={{
                  transition: { type: 'spring', stiffness: 200, damping: 60 },
                  flex: '3 1 0',
                }}
                onHoverStart={() => {
                  setIsHovered(item.name)
                }}
                onHoverEnd={() => {
                  setIsHovered(null)
                }}
                className="md:w-[300px] flex-1 rounded-[37px] overflow-hidden relative"
              >
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={item.img}
                  width={300}
                  height={800}
                  alt=""
                />
                <div
                  className={`flex flex-col gap-2 w-full px-5 items-center absolute bottom-0 left-1/2 -translate-x-1/2 pb-5 transition-opacity ${
                    isHovered === null || isHovered === item.name ? 'opacity-1' : 'opacity-0'
                  }`}
                >
                  <h2 className="text-4xl text-center">{item.name}</h2>
                  <div className="flex gap-2 font-secondary">
                    {item.titles.map(title => (
                      <div className="text-white font-normal bg-[#9B81BBCC] px-3 py-1 rounded-[13px]">
                        <span>{title}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className={`${
                      isHovered === item.name
                        ? 'opacity-1 block visible'
                        : 'opacity-0 hidden invisible '
                    } font-secondary text-2xl`}
                  >
                    <p>{item.more}</p>
                  </div>
                  <div className="flex gap-2">
                    {item.instagram && (
                      <Link href={item.instagram} target="_blank">
                        <Instagram sx={{ fontSize: '2.1rem' }} />
                      </Link>
                    )}
                    {item.linkedin && (
                      <Link href={item.linkedin} target="_blank">
                        <LinkedIn sx={{ fontSize: '2.1rem' }} />
                      </Link>
                    )}
                    {item.email && (
                      <Link href={item.email} target="_blank">
                        <Email sx={{ fontSize: '2.1rem' }} />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default OurTeamCards
