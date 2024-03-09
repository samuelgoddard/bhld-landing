import Compass from '@/components/compass'
import Div100vh from 'react-div-100vh'
import Layout from '@/components/layout'
import { fade, fadeDelay, reveal, revealDelay } from '@/helpers/transitions'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useState } from 'react'
import Header from '@/components/header'
import { ColorContext } from 'context/color'
import Link from 'next/link'
import { Split } from '@/components/split'
import { projectQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import { PortableText } from '@portabletext/react'
import SanityImageResponsive from '@/components/sanity-image-responsive'

const pageService = new SanityPageService(projectQuery)

export default function ProjectSlug(initialData) {
  const { data: { project}  } = pageService.getPreviewHook(initialData)()
  
  const colors = [
    'bg-green text-gray-dark selection:bg-gray-dark selection:text-green',
    'bg-gray text-gray-dark selection:bg-gray-dark selection:text-gray',
    'bg-gray-light text-gray-dark selection:bg-gray-dark selection:text-gray-light',
    'bg-gray-dark text-opacity-80 text-gray-light selection:bg-gray-light selection:text-gray-dark'
  ]

  const [infoShown, setInfoShown] = useState(false);

  const [colorPosition, setColorPosition] = useState(0);
  const [colorContext, setColorContext] = useContext(ColorContext);

  return (
    <Layout>
      <NextSeo title="Project Slug" />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Div100vh>
            <m.div variants={fade} className={`p-3 md:p-4 xl:p-5 md:pb-3 xl:pb-4 flex flex-wrap transition-colors ease-in-out duration-500 h-full bg-white`}>
              <Header />

              <div className="fixed top-0 left-0 right-0 w-full flex justify-center p-3 md:p-4 xl:p-5 pointer-events-none z-[10]">
                <span className="block leading-[1.045] md:leading-[1.045] xl:leading-[1.045] text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
                  <m.span variants={reveal} className="block">1/4</m.span></span>
              </div>

              <div className="mb-auto w-full relative z-[101] pt-16 md:pt-20 xl:pt-28">
                <m.article variants={fade} className="w-full">
                  <div className="max-w-[25ch] md:max-w-[32ch] relative z-[101]">
                    <h2 className="text-[42px] md:text-[52px] xl:text-[66px] leading-[1.025] md:leading-[1.025] xl:leading-[1.025] mb-3 md:mb-5 pb-0 flex flex-wrap">
                      <Split>{project.title}</Split>
                    </h2>
                  </div>

                  <span className="block leading-[1.045] md:leading-[1.045] xl:leading-[1.045] text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden z-[101]">
                    <button onClick={() => setInfoShown(!infoShown)} className="block group">
                      <m.span variants={reveal} className="block">
                        {infoShown ? 'Hide Info' : 'Show Info' }
                        <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                      </m.span>
                    </button>
                  </span>
                </m.article>
              </div>

              <div variants={fade} className="fixed inset-0 w-full h-full z-[0] flex flex-wrap items-center justify-center p-3 md:p-4 xl:p-5">
                <SanityImageResponsive
                  image={project.galleryImages[0]}
                  className="w-[15%] max-w-[25vh] mr-auto hidden md:block"
                />

                <SanityImageResponsive
                  image={project.galleryImages[1]}
                  className="w-[70%] md:w-[38%] max-w-[33vh] md:max-w-[60vh] mx-auto"
                />

                <SanityImageResponsive
                  image={project.galleryImages[2]}
                  className="w-[15%] max-w-[25vh] ml-auto hidden md:block"
                />
              </div>

              <footer variants={fade} className="w-full mt-auto relative z-40 md:flex md:items-end md:justify-end">
                { project.next ? (
                <Link href={`/projects/${project.next.slug.current}`}><a className="inline-block leading-tight md:leading-tight xl:leading-tight group overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                    Next Project: {project.next.title} <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                  </m.span>
                </a></Link>
                ) : (
                  <Link href={`/projects/${project.first.slug.current}`}><a className="inline-block leading-tight md:leading-tight xl:leading-tight group overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                    Next Project: {project.first.title} <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                  </m.span>
                </a></Link>
                )}
              </footer>

              <AnimatePresence>
                {infoShown && (
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
                    exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }}}
                    className="fixed inset-0 w-full h-full bg-white z-[100] flex flex-wrap  md:justify-center items-end md:items-center p-3 md:p-4 xl:p-5"
                  >
                    <div className="w-full max-w-[35ch] prose">
                      <PortableText value={project.projectInfo}></PortableText>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          </Div100vh>
        </m.main>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('project')
  return {
    paths: paths,
    fallback: false,
  };
}