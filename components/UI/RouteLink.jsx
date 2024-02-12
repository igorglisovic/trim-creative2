import { useAnimationContext } from '@/store/animation-ctx'
import Link from 'next/link'

const RouteLink = ({ href, children, className, 'aria-label': ariaLabel }) => {
  const { updateAnimationPosition, animationFinished } = useAnimationContext()

  const handleClick = e => {
    if (!animationFinished) {
      e.preventDefault()
      return
    }

    updateAnimationPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <Link
      aria-label={ariaLabel}
      onClick={e => handleClick(e)}
      className={`${
        !animationFinished ? 'cursor-default' : 'cursor-pointer'
      } ${className}`}
      href={href}
    >
      {children}
    </Link>
  )
}

export default RouteLink
