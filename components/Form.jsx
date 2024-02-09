import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from './UI/Button'

const Form = ({ secondaryFont }) => {
  const [submitting, setSubmitting] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState({
    email: ' ',
    name: ' ',
    message: ' ',
    error: '',
  })

  const formRef = useRef()
  const emailRef = useRef()
  const nameRef = useRef()
  const messageRef = useRef()

  const sendEmail = e => {
    e.preventDefault()

    if (messageRef.current.value.trim().length === 0) {
      setErrorMessage(prev => {
        return {
          ...prev,
          message: '*Ovo polje je obavezno!',
        }
      })
    } else {
      setErrorMessage(prev => {
        return {
          ...prev,
          message: '',
        }
      })
    }

    if (emailRef.current.value.trim().length === 0) {
      setErrorMessage(prev => {
        return {
          ...prev,
          email: '*Ovo polje je obavezno!',
        }
      })
    } else {
      setErrorMessage(prev => {
        return {
          ...prev,
          email: '',
        }
      })
    }

    if (nameRef.current.value.trim().length === 0) {
      setErrorMessage(prev => {
        return {
          ...prev,
          name: '*Ovo polje je obavezno!',
        }
      })
    } else {
      setErrorMessage(prev => {
        return {
          ...prev,
          name: '',
        }
      })
    }

    if (
      messageRef.current.value.trim().length <= 20 &&
      messageRef.current.value.trim().length !== 0
    ) {
      setErrorMessage(prev => {
        return {
          ...prev,
          message: '*Poruka mora da sadrži više od 20 karaktera!',
        }
      })
    }

    if (
      errorMessage.email === '' &&
      errorMessage.message === '' &&
      errorMessage.name === ''
    ) {
      setSubmitting(true)

      emailjs
        .sendForm(
          'service_erysgzg',
          'template_pmdwird',
          formRef.current,
          'I_JeOrI32X7cMuw0o'
        )
        .then(
          result => {
            setIsMessageSent(true)
            setSubmitting(false)
            setErrorMessage(prev => {
              return {
                ...prev,
                error: '',
              }
            })
          },
          error => {
            setIsMessageSent(false)
            setSubmitting(false)
            setErrorMessage(prev => {
              return {
                ...prev,
                error:
                  'Postoji problem sa slanjem poruke! Molimo Vas da nas kontaktirate na neki drugi način.',
              }
            })
          }
        )
    }
  }

  return (
    <form
      className={`${secondaryFont.className} flex flex-col gap-3 w-full xl:px-20 md:px-10`}
      onSubmit={sendEmail}
      ref={formRef}
    >
      {isMessageSent ? (
        <p className="text-lg mt-3">
          Poruka je uspešno poslata! Potrudićemo se da je obradimo u najkraćem
          mogućem roku.
        </p>
      ) : (
        <>
          {errorMessage.error === '' ? (
            <>
              <input
                ref={emailRef}
                className="input"
                type="email"
                placeholder="E-mail"
              />
              <p className="text-rose-700">{errorMessage.email}</p>
              <input
                ref={nameRef}
                className="input"
                type="text"
                placeholder="Ime"
              />
              <p className="text-rose-700">{errorMessage.name}</p>
              <textarea
                rows={1}
                ref={messageRef}
                className="input"
                type="text"
                placeholder="Poruka"
              />
              <p className="text-rose-700">{errorMessage.message}</p>

              <Button
                style={{ backgroundImage: 'none', color: 'black' }}
                className="bg-white self-end mt-5"
                disabled={submitting}
              >
                Posalji
              </Button>
            </>
          ) : (
            <p className="text-lg mt-3">{errorMessage.error}</p>
          )}
        </>
      )}
    </form>
  )
}

export default Form