import enContent from '@/data/content/en.json'
import srContent from '@/data/content/sr.json'
import { useEffect, useState } from 'react'

const useLocalization = () => {
  const [content, setContent] = useState(srContent)

  const { languages: localeLangs } =
    typeof window !== 'undefined' ? navigator : false

  const updateContent = value => {
    setContent(value)
  }

  useEffect(() => {
    const userLang = localStorage.getItem('lang')

    if (!userLang) {
      if (localeLangs && localeLangs.includes('sr')) {
        setContent(srContent)
        document.documentElement.setAttribute('lang', 'sr')
      } else {
        setContent(enContent)
        document.documentElement.setAttribute('lang', 'en')
      }
    } else {
      const content = userLang === 'sr' ? srContent : enContent

      setContent(content)
      document.documentElement.setAttribute('lang', userLang)
    }
  }, [])

  useEffect(() => {
    console.log(content)
  }, [content])

  return { content, updateContent }
}

export default useLocalization
