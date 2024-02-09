'use client'

import { AnimationContextProvider } from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { PortfolioContextProvider } from '@/store/portfolio-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'
import localFont from 'next/font/local'
import { Gabarito } from 'next/font/google'

const akira = localFont({
  src: [
    {
      path: '../public/fonts/Akira-Expanded-Demo.otf',
      weight: '400',
    },
  ],
  variable: '--font-akira',
})

const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ContainerContextProvider>
        <AnimationContextProvider>
          <PortfolioContextProvider>
            <Nav secondaryFont={gabarito} />
            <AnimatePresence>
              <Component
                mainFont={akira}
                secondaryFont={gabarito}
                key={router._key}
                {...pageProps}
              />
            </AnimatePresence>
          </PortfolioContextProvider>
        </AnimationContextProvider>
      </ContainerContextProvider>
    </>
  )
}
