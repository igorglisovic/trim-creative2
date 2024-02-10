import Link from 'next/link'
import Container from './Container'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAnimationContext } from '@/store/animation-ctx'

const Breadcrumb = ({ font, items }) => {
  const [breadcrumbArr, setBreadcrumbArr] = useState(items)

  const { updateAnimationPosition, animationFinished } = useAnimationContext()

  const router = useRouter()

  useEffect(() => {
    const breadcrumbArr = items.reduce((acc, curr, i) => {
      if (i !== 0) {
        acc.push({ link: null, title: '/' })
      }

      acc.push(curr)
      return acc
    }, [])

    setBreadcrumbArr(breadcrumbArr)
  }, [])

  const handleClick = (e, item) => {
    if (!animationFinished) {
      e.preventDefault()
      return
    }

    updateAnimationPosition({ x: e.clientX, y: e.clientY })
    router.push(item.link)
  }

  return (
    <Container>
      <div className="py-3">
        <span className={`${font.className} text-sm`}>
          {breadcrumbArr?.map((item, i) => {
            if (item.link) {
              return (
                <span
                  onClick={e => handleClick(e, item)}
                  className="capitalize cursor-pointer"
                  key={i}
                  href={item.link}
                >
                  {item.title}{' '}
                </span>
              )
            } else {
              return (
                <span className="capitalize" key={i}>
                  {item.title}{' '}
                </span>
              )
            }
          })}
        </span>
      </div>
    </Container>
  )
}

export default Breadcrumb
