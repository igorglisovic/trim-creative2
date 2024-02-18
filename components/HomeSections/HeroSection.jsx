import Trim from '../../public/aa.png'
import Trim2 from '../../public/bmwm4.jpg'
import Button from '../UI/Button'
import Image from 'next/image'
import Container from '../UI/Container'
import H1 from '../UI/H1'
import Circle from '../UI/Circle'

const HeroSection = ({ secondaryFont, content }) => {
  return (
    <Container>
      <div className="flex flex-col gap-6 pt-6 pb-20">
        <section>
          <div className="w-full relative">
            <Circle
              size={200}
              rotate={176}
              position={[-60, -130, 0, 0]}
              z={20}
            />

            <H1>
              Odsecite vasu <br /> konkurenciju
            </H1>
          </div>
          <div
            className={`${secondaryFont?.className} flex flex-col md:flex-row md:text-left text-center lg:gap-10 gap-8 mt-14 relative`}
          >
            <Circle
              size={824}
              position={[-150, 0, 0, -635]}
              z={0}
              className="bg-[#302839] blur-[200px] opacity-60"
            />
            <Circle
              size={824}
              position={[700, 0, 0, 1253]}
              z={0}
              className="bg-[#302839] blur-[100px] opacity-40"
            />
            <Circle
              size={130}
              rotate={99}
              position={['40%', 0, 0, '47%']}
              z={20}
            />
            <Circle
              size={70}
              rotate={-2.5}
              position={[-55, '5%', 0, 0]}
              z={20}
            />
            <Circle
              size={300}
              rotate={44}
              position={[-85, 0, 0, -150]}
              z={50}
            />
            <Circle size={60} rotate={44} position={[395, 0, 0, -25]} z={10} />
            <Circle size={160} rotate={99} position={[0, 1, -520, 0]} z={50} />
            <Circle
              size={55}
              rotate={99}
              position={[0, 0, -440, 200]}
              z={-10}
            />

            <div className="flex relative pb-[38.55%] overflow-hidden flex-1 shadow-md rounded-[38px]">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover z-30"
                alt=""
                src={Trim}
              />
            </div>
            <div className="flex-1 flex flex-col gap-5">
              <div className="flex relative pb-[56.25%] overflow-hidden w-full shadow-md rounded-[38px] z-10">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt=""
                  src={Trim2}
                />
              </div>
              <div className="flex flex-col gap-3">
                <p className="md:text-lg dark:text-dark">{content.p}</p>
                <Button
                  className="md:self-end self-center"
                  ariaLabel="Saznaj više"
                >
                  {content.button}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex relative pb-[20.55%] min-h-[180px] overflow-hidden w-full shadow-md rounded-[38px]">
            <Image
              src={Trim}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover z-30"
            />
          </div>
        </section>
      </div>
    </Container>
  )
}

export default HeroSection
