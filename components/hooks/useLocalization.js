import enContent from '@/data/content/en.json'
import srContent from '@/data/content/sr.json'
import { useEffect, useState } from 'react'

const useLocalization = () => {
  const [content, setContent] = useState(srContent)

  const { languages } = typeof window !== 'undefined' ? navigator : false

  useEffect(() => {
    if (languages && languages.includes('sr')) {
      setContent(srContent)
    } else {
      setContent(enContent)
    }
  }, [])

  return { content, setContent }
}

export default useLocalization
