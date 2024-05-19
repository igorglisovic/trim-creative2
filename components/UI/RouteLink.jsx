import { useAnimationContext } from '@/store/animation-ctx'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { useRouter } from 'next/router'

const RouteLink = ({ href, children, className, 'aria-label': ariaLabel }) => {
  const { updateAnimationPosition, animationFinished } = useAnimationContext()
  const router = useRouter()

  const handleClick = e => {
    if (!animationFinished) {
      e.preventDefault()
      return
    }

    router.push(href, undefined, { scroll: false })

    updateAnimationPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      aria-label={ariaLabel}
      onClick={e => handleClick(e)}
      className={`${!animationFinished ? 'cursor-default' : 'cursor-pointer'} ${className}`}
      href={href}
      // scroll={false}
    >
      {children}
    </div>
  )
}

export default RouteLink
