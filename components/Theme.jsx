import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'
import { useHeaderContext } from '@/store/header-ctx'
import light from '../public/light.png'
import Image from 'next/image'
import { themeVariants } from '@/data/animations'

const Theme = ({ theme, setTheme, className }) => {
  const [userTheme, setUserTheme] = useState(null)
  const [systemTheme, setSystemTheme] = useState(null)

  const { fixedHeader } = useHeaderContext()

  useEffect(() => {
    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    setSystemTheme(sysTheme)
    setUserTheme(localStorage.getItem('theme'))
  }, [])

  useEffect(() => {
    if (userTheme === null && systemTheme === null) return

    if (userTheme === 'dark' || (!userTheme && systemTheme && systemTheme === 'dark')) {
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

  return (
    <m.button
      onClick={handleThemeChange}
      variants={{
        closed: {
          marginRight: 0,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
          },
        },
        open: {
          marginRight: '40px',
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
          },
        },
      }}
      initial={fixedHeader ? 'open' : 'closed'}
      animate={fixedHeader ? 'open' : 'closed'}
      className={`sm:visible sm:flex invisible hidden w-[72px] text-white bg-[#D9D9D9] p-1 rounded-full ${className}`}
      aria-label="Change Theme Button"
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
          <Image src={light} alt="Sun" />
        </m.figure>
      </div>
    </m.button>
  )
}

export default Theme
