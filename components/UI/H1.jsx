import { useContainerContext } from '@//store/container-ctx'

const H1 = ({ children }) => {
  const { containerWidth } = useContainerContext()

  return (
    <h1
      className={`uppercase text-center whitespace-nowrap leading-none dark:text-dark`}
      style={{
        fontSize: containerWidth ? `${containerWidth / 11.6}px` : '235px',
      }}
    >
      {children}
    </h1>
  )
}

export default H1
