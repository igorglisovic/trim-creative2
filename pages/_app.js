import {
  AnimationContextProvider,
  useAnimationContext,
} from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { FontsContextProvider } from '@/store/fonts-ctx'
import { RouterContextProvider } from '@/store/router-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'
import { useEffect } from 'react'
import localFont from 'next/font/local'

export default function App({ Component, pageProps, router }) {
  // const akira = localFont({
  //   src: [
  //     {
  //       path: '../public/fonts/Akira-Expanded-Demo.otf',
  //       weight: '400',
  //     },
  //   ],
  //   variable: '--font-akira',
  // })

  return (
    <>
      <ContainerContextProvider>
        <FontsContextProvider>
          <AnimationContextProvider>
            <RouterContextProvider>
              <Nav />
              <AnimatePresence>
                <Component key={router._key} {...pageProps} />
              </AnimatePresence>
            </RouterContextProvider>
          </AnimationContextProvider>
        </FontsContextProvider>
      </ContainerContextProvider>
    </>
  )
}
