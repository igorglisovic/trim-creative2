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
  const hamburgerRef = useRef()

  const [mediaMatches, setMediaMatches] = useState(false)
  const [media, setMedia] = useState(false)

  useEffect(() => {
    setMedia(window.matchMedia('(max-width: 640px)'))
  }, [])

  const getMediaMatches = () => {
    if (media.matches) {
      setMediaMatches(true)
    } else {
      setMediaMatches(false)
    }
  }

  useEffect(() => {
    getMediaMatches()
    window.addEventListener('resize', getMediaMatches)
  }, [media])

  useEffect(() => {
    const handleScroll = e => {
      const headerRect = ref.current.getBoundingClientRect()

      if (ref.current && !ref.current.classList.contains('pos-fixed')) {
        if (headerRect.top <= -headerRect.height) {
          updateFixedHeader(true)
        }
      }
      if (ref.current.classList.contains('pos-fixed') && window.scrollY < headerRect.height) {
        updateFixedHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref])

  useEffect(() => {
    const handleDocumentClick = event => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target) &&
        hamburgerIconRef.current &&
        !hamburgerIconRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  useEffect(() => {
    setMobileNavPosition({
      x: hamburgerIconRef.current.getBoundingClientRect().x + 20,
      y: hamburgerIconRef.current.getBoundingClientRect().y + 20,
    })
  }, [hamburgerIconRef])

  // useEffect(() => {
  // }, [mobileNavPosition])

  return (
    <m.header
      className={`font-secondary ${animationFinished ? '' : 'move-header'} ${
        fixedHeader ? 'pos-fixed z-[100] w-full ' : ''
      } ${
        fixedHeader && mediaMatches
          ? '!bg-[#ffffffb5] dark:!bg-[#231F20B2] dark:border-2 dark:border-[#373737]'
          : ''
      }`}
      ref={ref}
      variants={headerVariants}
      initial={fixedHeader ? 'open' : 'closed'}
      animate={fixedHeader ? 'open' : 'closed'}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
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
          initial={!mediaMatches && fixedHeader ? 'open' : 'closed'}
          animate={!mediaMatches && fixedHeader ? 'open' : 'closed'}
          className={`relative sm:min-h-[95px] min-h-[80px] whitespace-nowrap flex justify-between items-center ${
            fixedHeader && !mediaMatches
              ? 'bg-[#ffffffb5] dark:bg-[#231F20B2] dark:border-2 dark:border-[#373737]'
              : ''
          } `}
        >
          <m.div
            variants={{
              closed: {
                marginLeft: '0',
                transform: mediaMatches ? 'translateY(-20px)' : 'translateY(0px)',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
              open: {
                marginLeft: mediaMatches ? '0' : '40px',
                transform: 'translateY(0px)',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
            }}
            initial={fixedHeader ? 'open' : 'closed'}
            animate={fixedHeader ? 'open' : 'closed'}
            // transition={{
            //   type: 'spring',
            //   stiffness: 300,
            //   damping: 30,
            // }}
            className={`md:w-[8rem] w-[6.3rem] ${!fixedHeader && '!translate-y-0'}`}
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
              variants={{
                closed: {
                  transform: 'translateY(-20px)',
                },
                open: {
                  transform: 'translateY(0px)',
                },
              }}
              initial={fixedHeader ? 'open' : 'closed'}
              animate={fixedHeader ? 'open' : 'closed'}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              onClick={e => {
                setIsOpen(!isOpen)
              }}
              className={`button-two w-full h-full justify-center items-center stroke-black dark:stroke-dark absolute top-0 left-0 z-50  ${
                !fixedHeader && '!translate-y-0'
              }`}
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
          ref={hamburgerRef}
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
            <ul className="flex gap-5 flex-col items-end h-full mt-[88px] text-xl">
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
              <Theme
                className="!flex !visible"
                theme={theme}
                setTheme={setTheme}
                animation={false}
              />
            </ul>
          </Container>
        </m.div>
      </Container>
    </m.header>
  )
}

export default Nav
