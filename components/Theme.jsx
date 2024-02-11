import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { useHeaderContext } from '@/store/header-ctx'
import light from '../public/light.png'
import Image from 'next/image'

const Theme = ({ theme, setTheme }) => {
  const [userTheme, setUserTheme] = useState(null)
  const [systemTheme, setSystemTheme] = useState(null)

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
      left: 'calc(100% - 1.75rem)',
    },
    toRight: {
      left: 0,
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
      className="hidden invisible sm:visible sm:flex absolute right-0 position-center z-50 w-[72px] text-white bg-[#D9D9D9] p-1 rounded-full"
    >
      <div className="w-full h-7 relative">
        <m.figure
          variants={themeVariants}
          initial={theme === 'dark' ? 'toLeft' : 'toRight'}
          animate={theme === 'dark' ? 'toLeft' : 'toRight'}
          transition={{
            duration: 0.3,
            type: 'ease-out',
          }}
          className="p-1 w-7 h-7 bg-white rounded-full absolute"
        >
          <Image src={light} />
        </m.figure>
      </div>
    </m.button>
  )
}

export default Theme
