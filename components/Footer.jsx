import Container from './UI/Container'
import Logo from '../public/trim-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { EmailOutlined, Instagram } from '@mui/icons-material'
import Form from './Form'
import RouteLink from './UI/RouteLink'
import useLocalization from './hooks/useLocalization'

const Footer = ({ secondaryFont }) => {
  const {
    content: { footer, header },
  } = useLocalization()

  return (
    <footer className="bg-footer-gradient pt-20 pb-14">
      <Container>
        <div className="flex flex-col gap-6 text-white items-center m-auto lg:max-w-[50%] md:max-w-[72%] max-w-full">
          <h2
            className={`uppercase sm:text-5xl text-4xl text-center md:whitespace-nowrap`}
          >
            {footer.h2}
          </h2>
          <p
            className={`md:text-lg text-gray-300 text-center ${secondaryFont.className}`}
          >
            {footer.p}
          </p>
          <Form secondaryFont={secondaryFont} />
        </div>
        <div
          className={`flex flex-col md:flex-row items-center justify-between gap-7 mt-4 md:mt-16`}
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
              {header?.navItems?.map(navItem => (
                <li key={navItem.title} className="uppercase text-white">
                  <RouteLink
                    className={`font-medium sm:text-sm lg:text-base text-xs ${secondaryFont.className}`}
                    href={navItem.path}
                    aria-label={navItem.title}
                  >
                    {navItem.title}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-center">
            <Link aria-label="TrimCreative Instagram" href="/">
              <Instagram className="text-white" sx={{ fontSize: '1.9rem' }} />
            </Link>
            <Link aria-label="TrimCreative Email" href="/">
              <EmailOutlined
                className="text-white"
                sx={{ fontSize: '1.9rem' }}
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
