'use client'

import {
  AnimationContextProvider,
  useAnimationContext,
} from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { RouterContextProvider } from '@/store/router-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'
import localFont from 'next/font/local'
import { Gabarito } from 'next/font/google'
import { useEffect, useState } from 'react'

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
  const [isTabVisible, setIsTabVisible] = useState(true)
  const [animationState, setAnimationState] = useState(false)

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden)

      console.log(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <>
      <ContainerContextProvider>
        <AnimationContextProvider>
          <RouterContextProvider>
            <Nav secondaryFont={gabarito} />
            <AnimatePresence>
              <Component
                mainFont={akira}
                secondaryFont={gabarito}
                key={router._key}
                isTabVisible={isTabVisible}
                {...pageProps}
              />
            </AnimatePresence>
          </RouterContextProvider>
        </AnimationContextProvider>
      </ContainerContextProvider>
    </>
  )
}
