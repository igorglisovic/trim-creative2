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
import en from '@/data/locales/en'
import sr from '@/data/locales/sr'
import { useRouter } from 'next/router'

const Nav = () => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mobileNavPosition, setMobileNavPosition] = useState({ x: 0, y: 0 })
  const [theme, setTheme] = useState(null)

  const ref = useRef(null)

  const { animationFinished } = useAnimationContext()
  const { updateFixedHeader, fixedHeader } = useHeaderContext()

  const router = useRouter()
  const { locale } = router
  const content = locale === 'en' ? en : sr

  const { header } = content

  const hamburgerIconRef = useRef()

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

  useEffect(() => {
    setMobileNavPosition({
      x: hamburgerIconRef.current.getBoundingClientRect().x + 20,
      y: hamburgerIconRef.current.getBoundingClientRect().y + 20,
    })
    console.log(hamburgerIconRef.current.getBoundingClientRect().x)
  }, [hamburgerIconRef])

  // useEffect(() => {
  //   console.log(mobileNavPosition)
  //   console.log(hamburgerIconRef.current.getBoundingClientRect().x)
  // }, [mobileNavPosition])

  return (
    <m.header
      className={`font-secondary ${animationFinished ? '' : 'move-header'} ${
        fixedHeader ? 'pos-fixed z-[100] w-full ' : ''
      }`}
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
          className={`relative min-h-[95px] whitespace-nowrap flex justify-between items-center  ${
            fixedHeader
              ? 'bg-[#ffffffb5] dark:bg-[#231F20B2] dark:border-2 dark:border-[#373737]'
              : ''
          }`}
        >
          <m.div
            variants={{
              closed: {
                marginLeft: '0',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
              open: {
                marginLeft: '40px',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
            }}
            initial={fixedHeader ? 'open' : 'closed'}
            animate={fixedHeader ? 'open' : 'closed'}
            className="md:w-[8rem] w-[6.3rem]"
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
          {/* Desktop Navigation */}
          <nav className="hidden invisible sm:visible sm:flex items-center z-50 ">
            <ul className="flex md:gap-5 gap-3">
              {header.navItems?.map(navItem => (
                <li
                  key={navItem.title}
                  className={`uppercase ${
                    fixedHeader ? 'text-light-black dark:text-dark' : 'dark:text-dark'
                  }`}
                >
                  <span className="relative">
                    <RouteLink
                      className={`font-semibold text-sm lg:text-base`}
                      href={navItem.path}
                      aria-label={navItem.title}
                    >
                      {navItem.title}
                    </RouteLink>
                  </span>
                </li>
              ))}
            </ul>
          </nav>
          <Theme theme={theme} setTheme={setTheme} />
          {/* Mobile (Hamburger) Navigation */}
          <div className="relative w-10 h-10 sm:hidden sm:invisible visible flex">
            <m.button
              onClick={e => {
                // setMobileNavPosition({ x: e.clientX, y: e.clientY })
                setIsOpen(!isOpen)
              }}
              className=" button-two w-full h-full justify-center items-center stroke-black dark:stroke-dark absolute top-0 left-0 z-50"
              aria-expanded="false"
              aria-label="hamburger"
            >
              <svg
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full"
                ref={hamburgerIconRef}
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
          </div>
        </m.div>
        <m.div
          variants={{
            closed: {
              clipPath: `circle(0px at ${mobileNavPosition.x}px ${mobileNavPosition.y}px)`,
              transition: {
                duration: 0.7,
                ease: 'circOut',
              },
            },
            open: {
              clipPath: `circle(240px at ${mobileNavPosition.x + 10}px ${
                mobileNavPosition.y + 150
              }px)`,
              transition: {
                duration: 0.7,
                ease: 'circIn',
              },
            },
          }}
          initial={isOpen ? 'open' : 'closed'}
          animate={isOpen ? 'open' : 'closed'}
          className="absolute top-0 left-0 text-white z-10 bg-main-gradient w-screen h-screen "
        >
          <Container>
            <ul className="flex gap-5 flex-col items-end h-full mt-24 text-xl">
              {header.navItems?.map(navItem => (
                <li key={navItem.title} className="uppercase">
                  {/* <span onClick={() => setIsOpen(false)} className="relative"> */}
                  <span className="relative">
                    <RouteLink
                      className={`font-semibold text-xl`}
                      href={navItem.path}
                      aria-label={navItem.title}
                    >
                      {navItem.title}
                    </RouteLink>
                  </span>
                </li>
              ))}
              <Theme className="!flex !visible" theme={theme} setTheme={setTheme} />
            </ul>
          </Container>
        </m.div>
      </Container>
    </m.header>
  )
}

export default Nav
