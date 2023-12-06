import { AnimationContextProvider } from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { FontsContextProvider } from '@/store/fonts-ctx'
import { RouterContextProvider } from '@/store/router-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'

export default function App({ Component, pageProps, router }) {
  console.log(router)

  return (
    <div>
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
    </div>
  )
}
