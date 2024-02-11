import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { useHeaderContext } from '@/store/header-ctx'
import light from '../public/light.png'
import Image from 'next/image'

const Theme = () => {
  const [userTheme, setUserTheme] = useState(null)
  const [systemTheme, setSystemTheme] = useState(null)
  const [theme, setTheme] = useState(null)

  const { fixedHeader } = useHeaderContext()

  useEffect(() => {
    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'

    setSystemTheme(sysTheme)
    setUserTheme(localStorage.getItem('theme'))
  }, [])

  useEffect(() => {
    if (userTheme === null && systemTheme === null) return

    if (
      userTheme === 'dark' ||
      (!userTheme && systemTheme && systemTheme === 'dark')
    ) {
      setTheme('dark')
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  }, [userTheme, systemTheme])

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem('theme', newTheme)

    setUserTheme(newTheme)
    setTheme(newTheme)
  }

  const themeVariants = {
    toLeft: {
      alignSelf: 'start',
    },
    toRight: {
      alignSelf: 'end',
    },
  }

  return (
    <m.button
      onClick={handleThemeChange}
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
      className="hidden invisible sm:visible sm:flex flex-col justify-start absolute right-0 position-center z-50 w-[72px] text-white bg-[#D9D9D9] p-1 rounded-full"
    >
      <m.figure
        variants={themeVariants}
        initial={theme === 'dark' ? 'toRight' : 'toLeft'}
        animate={theme === 'dark' ? 'toRight' : 'toLeft'}
        transition={{
          duration: 0.5,
          type: 'ease-out',
        }}
        className="w-7 h-7 p-1 bg-white rounded-full"
      >
        <Image src={light} />
      </m.figure>
    </m.button>
  )
}

export default Theme
