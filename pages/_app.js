'use client'

import { AnimationContextProvider } from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { PortfolioContextProvider } from '@/store/portfolio-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'
import localFont from 'next/font/local'
import { Gabarito } from 'next/font/google'
import { HeaderContextProvider } from '@/store/header-ctx'
import Head from 'next/head'

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
      <Head>
        <title>TrimCreative</title>
        <meta
          name="description"
          content="We specialize in developing tailored, data-driven campaigns and compelling content that drives brand growth. Our focus is on delivering measurable results and staying at the forefront of digital innovation. Let's collaborate to amplify your brand's presence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ContainerContextProvider>
        <AnimationContextProvider>
          <PortfolioContextProvider>
            <HeaderContextProvider>
              <Nav secondaryFont={gabarito} />
              <AnimatePresence>
                <Component
                  mainFont={akira}
                  secondaryFont={gabarito}
                  key={router._key}
                  {...pageProps}
                />
              </AnimatePresence>
            </HeaderContextProvider>
          </PortfolioContextProvider>
        </AnimationContextProvider>
      </ContainerContextProvider>
    </>
  )
}
