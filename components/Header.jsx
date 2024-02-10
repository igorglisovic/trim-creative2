'use client'

import Container from './UI/Container'
import Logo from '../public/trim-logo.png'
import { navItemsSr } from '../data/nav'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useAnimationContext } from '../store/animation-ctx'
import { motion as m } from 'framer-motion'
import { useHeaderContext } from '@/store/header-ctx'

const Nav = ({ secondaryFont }) => {
  const [expand, setExpand] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { updateAnimationPosition, animationFinished, animationPosition } =
    useAnimationContext()
  const { updateFixedHeader, fixedHeader } = useHeaderContext()

  const handleClick = e => {
    if (!animationFinished) {
      e.preventDefault()
      return
    }

    updateAnimationPosition({ x: e.clientX, y: e.clientY })

    console.log('window.scrollY ', window.scrollY)
  }
  const ref = useRef(null)

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

  const headerVariants = {
    closed: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 9999,
      backgroundColor: 'transparent',
      width: '100%',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
    open: {
      position: 'fixed',
      top: '20px',
      zIndex: 9999,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
    },
  }

  return (
    <m.header
      className={`${secondaryFont?.className} ${
        animationFinished ? '' : 'move-header'
      } ${fixedHeader ? 'pos-fixed z-[100] w-full' : ''}`}
      ref={ref}
      variants={headerVariants}
      initial={fixedHeader ? 'open' : 'closed'}
      animate={fixedHeader ? 'open' : 'closed'}
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
              borderRadius: '24px 24px 0 0',
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
            fixedHeader ? ' bg-[#ffffffb5]' : ''
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
            <Image
              priority={true}
              alt="Trim Creative logo"
              className="max-w-full"
              src={Logo}
            />
          </m.div>
          {/* Desktop Menu */}
          <nav className="hidden invisible sm:visible sm:flex items-center absolute nav z-50 ">
            <ul className="flex md:gap-5 gap-3">
              {navItemsSr?.map(navItem => (
                <li key={navItem.title} className="uppercase text-light-black">
                  <Link
                    onClick={e => handleClick(e, navItem)}
                    className={`font-medium text-sm lg:text-base ${
                      !animationFinished ? 'cursor-default' : 'cursor-pointer'
                    } `}
                    href={navItem.path}
                    scroll={false}
                    aria-label={navItem.title}
                  >
                    {navItem.title}
                  </Link>
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
          <m.button
            variants={{
              closed: {
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
              open: {
                right: '40px',
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                },
              },
            }}
            initial={fixedHeader ? 'open' : 'closed'}
            animate={fixedHeader ? 'open' : 'closed'}
            className="hidden invisible sm:visible sm:flex absolute right-0 position-center z-50
            disabled:cursor-default uppercase text-white bg-main-gradient px-[2.7em] py-3 rounded-full text-xs lg:text-sm font-semibold"
          >
            Pozovi
          </m.button>
        </m.div>
      </Container>
    </m.header>
  )
}

export default Nav
