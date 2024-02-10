import Link from 'next/link'
import Container from './Container'
import { useEffect, useState } from 'react'

const Breadcrumb = ({ font, items }) => {
  const [breadcrumbArr, setBreadcrumbArr] = useState(items)

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

  return (
    <Container>
      <div className="py-3">
        <span className={`${font.className} text-sm`}>
          {breadcrumbArr?.map((item, i) => {
            if (item.link) {
              return (
                <Link className="capitalize" key={i} href={item.link}>
                  {item.title}{' '}
                </Link>
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
