import Container from './Container'

const Breadcrumb = ({ font }) => {
  return (
    <Container>
      <div className="py-3">
        <span className={`${font.className} text-sm`}>
          Portfolio / Web Design / Golijska
        </span>
      </div>
    </Container>
  )
}

export default Breadcrumb
