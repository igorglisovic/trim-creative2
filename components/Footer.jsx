'use client'

import { useFontsContext } from '../store/fonts-ctx'
import Button from './UI/Button'
import Container from './UI/Container'
import Logo from '../public/trim-logo.png'
import { navItemsSr } from '../data/nav'
import Image from 'next/image'
import Link from 'next/link'
// import { EmailOutlined, Instagram } from '@mui/icons-material'

const Footer = () => {
  const { gabaritoFont, akiraFont } = useFontsContext()

  return (
    <footer className="bg-footer-gradient pt-20 pb-14">
      <Container>
        <div className="flex flex-col gap-6 text-white items-center m-auto lg:max-w-[50%] md:max-w-[72%] max-w-full">
          <h2
            className={`${akiraFont?.className} uppercase sm:text-5xl text-4xl text-center md:whitespace-nowrap`}
          >
            Spremni za rast?
          </h2>
          <p
            className={`md:text-lg text-gray-300 text-center ${gabaritoFont?.className}`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
            libero a dolor feugiat iaculis.
          </p>
          <form
            className={`${gabaritoFont?.className} flex flex-col gap-6 w-full xl:px-20 md:px-10`}
          >
            <input className="input" type="text" placeholder="E-mail" />
            <input className="input" type="text" placeholder="Ime" />
            <textarea
              rows={1}
              className="input"
              type="text"
              placeholder="Poruka"
            />
            <Button
              style={{ backgroundImage: 'none', color: 'black' }}
              className="bg-white self-end mt-5"
            >
              Posalji
            </Button>
          </form>
        </div>
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-7 mt-4 md:mt-16 ${gabaritoFont?.className}`}
        >
          <div className="w-[8rem]">
            <Image
              priority={true}
              alt="Trim Creative logo"
              className="max-w-full"
              src={Logo}
            />
          </div>
          <nav className="flex items-center">
            <ul className="flex flex-row gap-2 sm:gap-5">
              {navItemsSr?.map(navItem => (
                <li key={navItem.title} className="uppercase text-white">
                  <Link
                    onClick={e => handleClick(e, navItem)}
                    className={`font-medium sm:text-sm lg:text-base text-xs `}
                    href={navItem.path}
                  >
                    {navItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-center">
            <Link href="/">
              {/* <Instagram className="text-white" sx={{ fontSize: '1.9rem' }} /> */}
            </Link>
            <Link href="/">
              {/* <EmailOutlined
                className="text-white"
                sx={{ fontSize: '1.9rem' }}
              /> */}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
