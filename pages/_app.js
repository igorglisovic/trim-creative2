import { AnimationContextProvider } from '@/store/animation-ctx'
import { ContainerContextProvider } from '@/store/container-ctx'
import { PortfolioContextProvider } from '@/store/portfolio-ctx'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import Nav from '../components/Header'
import localFont from 'next/font/local'
import { Raleway } from 'next/font/google'
import { HeaderContextProvider } from '@/store/header-ctx'
import Head from 'next/head'

const monument = localFont({
  src: [
    {
      path: '../public/fonts/MonumentExtended-Ultrabold.otf',
    },
  ],
  variable: '--font-monument',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
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
        <link rel="icon" href="/trim4.jpg" />
      </Head>
      <ContainerContextProvider>
        <AnimationContextProvider>
          <PortfolioContextProvider>
            <HeaderContextProvider>
              <div className={`${monument.variable} ${raleway.variable}`}>
                <Nav />
                <AnimatePresence>
                  <Component key={router._key} {...pageProps} />
                </AnimatePresence>
              </div>
            </HeaderContextProvider>
          </PortfolioContextProvider>
        </AnimationContextProvider>
      </ContainerContextProvider>
    </>
  )
}
