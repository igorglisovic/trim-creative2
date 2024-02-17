import enContent from '@/data/content/en.json'
import srContent from '@/data/content/sr.json'

export default function useLocalization() {
  const { languages } = typeof window !== 'undefined' ? navigator : false

  const getContent = () => {
    if (languages && languages.includes('sr')) {
      return srContent
    }

    return enContent
  }

  return { getContent }
}
