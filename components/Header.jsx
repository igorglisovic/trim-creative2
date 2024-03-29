import Container from './UI/Container'
import LogoDark from '../public/trim-logo.png'
import LogoLight from '../public/trim-logo2.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useAnimationContext } from '../store/animation-ctx'
import { motion as m } from 'framer-motion'
import { useHeaderContext } from '@/store/header-ctx'
import Theme from './Theme'
import RouteLink from './UI/RouteLink'
import { headerVariants } from '@/data/animations'
import useLocalization from './hooks/useLocalization'

const Nav = ({ secondaryFont }) => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState(null)

  const ref = useRef(null)

  const { animationFinished } = useAnimationContext()
  const { updateFixedHeader, fixedHeader } = useHeaderContext()

  const {
    content: { header },
  } = useLocalization()

  useEffect(() => {
    const handleScroll = e => {
      if (ref.current && !ref.current.classList.contains('pos-fixed')) {
        const headerRect = ref.current.getBoundingClientRect()
        if (headerRect.top <= -95) {
          updateFixedHeader(true)
        }
      }
      if (ref.current.classList.contains('pos-fixed') && window.scrollY < 95) {
        updateFixedHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])

  return (
    <m.header
      className={`${secondaryFont?.className} ${
        animationFinished ? '' : 'move-header'
      } ${fixedHeader ? 'pos-fixed z-[100] w-full' : ''}`}
      ref={ref}
      variants={headerVariants}
      initial={fixedHeader ? 'open' : 'closed'}
      animate={fixedHeader ? 'open' : 'closed'}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 25,
      }}
    >
      <Container>
        <m.div
          variants={{
            closed: {
              backdropFilter: 'blur(0px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
              },
            },
            open: {
              borderRadius: '24px',
              backdropFilter: 'blur(3px)',
              transition: {
                type: 'spring',
                stiffness: 300,
                damping: 30,
              },
            },
          }}
          initial={fixedHeader ? 'open' : 'closed'}
          animate={fixedHeader ? 'open' : 'closed'}
          className={`relative min-h-[95px] whitespace-nowrap ${
            fixedHeader
              ? 'bg-[#ffffffb5] dark:bg-[#231F20B2] dark:border-2 dark:border-[#373737]'
              : ''
          }`}
        >
          <m.div
            variants={{
              closed: {
                left: '0',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
              open: {
                left: '40px',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
            }}
            initial={fixedHeader ? 'open' : 'closed'}
            animate={fixedHeader ? 'open' : 'closed'}
            className="md:w-[8rem] w-[6.3rem] absolute left-0 position-center z-50"
          >
            <RouteLink href="/">
              <Image
                priority={true}
                alt="TrimCreative logo"
                className="max-w-full"
                // src={theme === 'dark' && !fixedHeader ? LogoLight : LogoDark}
                src={theme === 'dark' ? LogoLight : LogoDark}
              />
            </RouteLink>
          </m.div>
          {/* Desktop Menu */}
          <nav className="hidden invisible sm:visible sm:flex items-center absolute nav z-50 ">
            <ul className="flex md:gap-5 gap-3">
              {header.navItems?.map(navItem => (
                <li
                  key={navItem.title}
                  className={`uppercase ${
                    fixedHeader
                      ? 'text-light-black dark:text-dark'
                      : 'dark:text-dark'
                  }`}
                >
                  <RouteLink
                    className={`font-medium text-sm lg:text-base`}
                    href={navItem.path}
                    aria-label={navItem.title}
                  >
                    {navItem.title}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>
          {/* Mobile Menu */}
          <m.button
            onClick={() => {
              setIsOpen(!isOpen)
            }}
            className={
              'sm:hidden sm:invisible visible flex button-two absolute right-0 top-[50%] translate-y-[-50%] w-10 h-10 justify-center items-center'
            }
            aria-expanded="false"
            aria-label="hamburger"
          >
            <svg
              stroke={'#000000'}
              viewBox="0 0 70 70"
              xmlns="http://www.w3.org/2000/svg"
              // width="250"
              className="w-full"
            >
              <line
                className={`line top`}
                x1="0"
                x2="100"
                y1="20"
                y2="20"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="100"
                strokeDashoffset="0"
              ></line>
              <line
                className={`line middle`}
                x1="100"
                x2="0"
                y1="35"
                y2="35"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="85"
                strokeDashoffset="0"
              ></line>
              <line
                className={`line bottom`}
                x1="0"
                x2="100"
                y1="50"
                y2="50"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="100"
                strokeDashoffset="0"
              ></line>
            </svg>
          </m.button>
          <Theme theme={theme} setTheme={setTheme} />
        </m.div>
      </Container>
    </m.header>
  )
}

export default Nav
