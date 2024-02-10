import { useRouter } from 'next/router'
import { motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Footer from '@/components/Footer'
import { useAnimationContext } from '@/store/animation-ctx'
import Breadcrumb from '@/components/UI/Breadcrumb'
import PortfolioTitleSection from '@/components/PortfolioSections/PortfolioTitleSection'
import { portfolio } from '@/data/portfolio'
import slugify from 'slugify'
import PortfolioGallerySection from '@/components/PortfolioSections/PortfolioGallerySection'
import { portfolioFilters } from '@/data/portfolio'

const initialCards = portfolio.map(card => {
  return { ...card, slug: slugify(card.title, { lower: true }) }
})

const PortfolioProject = ({ mainFont, secondaryFont }) => {
  const router = useRouter()

  const [variants, setVariants] = useState(null)
  const [project, setProject] = useState(null)
  const [projectFilter, setProjectFilter] = useState(null)

  useEffect(() => {
    if (router.query.id) {
      setProject(initialCards.find(el => el.slug === router.query.id))
    }
  }, [initialCards, router.query.id, portfolioFilters])

  useEffect(() => {
    console.log('project ', project)
    if (project)
      setProjectFilter(
        portfolioFilters.find(el => el.id === project?.filters[0])
      )

    console.log(
      'portfolioFilters ',
      portfolioFilters,
      portfolioFilters.find(el => el.id === project?.filters[0])
    )
  }, [project, portfolioFilters, router.query.id])

  const {
    animationPosition,
    updateAnimationFinished,
    animationFinished,
    updateAnimationStarted,
    updateBackgroundColor,
  } = useAnimationContext()

  // Smooth scroll
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [animationFinished])

  useEffect(() => {
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    let variantsObj

    if (!animationPosition?.x || !animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
        },
        show: {
          clipPath: `circle(${
            screenWidth > screenHeight ? screenWidth : screenHeight
          }px at ${screenWidth / 2}px ${screenHeight / 2}px)`,
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }

    if (animationPosition?.x && animationPosition?.y) {
      variantsObj = {
        hidden: {
          clipPath: `circle(0px at ${animationPosition.x}px ${animationPosition.y}px)`,
        },
        show: {
          clipPath: `circle(${
            screenWidth > screenHeight
              ? screenWidth + animationPosition.x
              : screenWidth + animationPosition.x
          }px at ${animationPosition?.x}px ${animationPosition?.y}px)`,
          transitionEnd: {
            clipPath: 'none',
          },
        },
      }
    }

    setVariants(variantsObj)
  }, [animationPosition])

  const [removeComponent, setRemoveComponent] = useState(false)

  useEffect(() => {
    if (router.pathname !== `/portfolio/[id]`) {
      setTimeout(() => {
        setRemoveComponent(true)
      }, 1800)
    }
  }, [router, project])

  return (
    variants && (
      <>
        {!removeComponent && (
          <m.main
            variants={variants}
            initial={'hidden'}
            animate={'show'}
            exit={{ opacity: 0.99 }}
            transition={{
              duration: 2,
              type: 'ease-out',
            }}
            onAnimationStart={() => {
              updateAnimationStarted(true)
              updateAnimationFinished(false)
            }}
            onAnimationComplete={() => {
              updateAnimationFinished(true)
              updateAnimationStarted(false)
              updateBackgroundColor(false)
            }}
            className={`${animationFinished ? '' : 'page-transition'} ${
              mainFont.className
            } pt-[95px]`}
          >
            {project && projectFilter && (
              <Breadcrumb
                items={[
                  { link: '/portfolio', title: 'Portfolio' },
                  { link: null, title: projectFilter?.title },
                  { link: null, title: project?.title },
                ]}
                font={secondaryFont}
              />
            )}
            <PortfolioTitleSection
              project={project}
              secondaryFont={secondaryFont}
            />
            <PortfolioGallerySection project={project} />
            <Footer secondaryFont={secondaryFont} />
          </m.main>
        )}
      </>
    )
  )
}

export default PortfolioProject
