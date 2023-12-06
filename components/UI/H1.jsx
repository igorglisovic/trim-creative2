import { useContainerContext } from '@//store/container-ctx'
import { useFontsContext } from '@//store/fonts-ctx'

const H1 = ({ children }) => {
  const { akiraFont } = useFontsContext()
  const { containerWidth } = useContainerContext()

  return (
    <h1
      className={`${akiraFont?.className} uppercase text-center whitespace-nowrap leading-none`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 11.6}px` : '235px',
      }}
    >
      {children}
    </h1>
  )
}

export default H1
