import Form from '@/components/Form'
import Container from '@/components/UI/Container'
import Main from '@/components/UI/Main'
import { useRouter } from 'next/router'
import en from '@/data/locales/en'
import sr from '@/data/locales/sr'
import H1 from '@/components/UI/H1'
import Image from 'next/image'

const Kontakt = () => {
  const router = useRouter()
  const { locale } = router
  const content = locale === 'en' ? en : sr

  const { footer, contact } = content

  return (
    <Main path="/contact">
      <Container className="overflow-y-scroll">
        <div className="pt-6">
          <H1>{contact.h1}</H1>
          <div className="flex flex-row gap-3 mt-8">
            <div className="flex flex-col gap-6 min-w-[50%]">
              <div>
                <h2
                  className={`uppercase sm:text-5xl text-4xl text-center md:whitespace-nowrap dark:text-dark`}
                >
                  {footer.h2}
                </h2>
                <p className={`md:text-lg text-gray-300 text-center font-secondary`}>{footer.p}</p>
              </div>
              <Form className="dark:text-dark !text-black" />
            </div>
            <div className="flex min-w-[45%] rounded-[37px] overflow-hidden relative">
              <Image
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://res.cloudinary.com/dgpxbcu8p/image/upload/v1715457916/2_ypjfaq.png"
                width={300}
                height={800}
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </Main>
  )
}

export default Kontakt
