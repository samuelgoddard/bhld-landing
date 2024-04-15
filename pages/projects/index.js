import Compass from '@/components/compass'
import Div100vh from 'react-div-100vh'
import Layout from '@/components/layout'
import { fade, fadeDelay, reveal, revealDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useContext, useState } from 'react'
import Header from '@/components/header'
import { ColorContext } from 'context/color'
import Link from 'next/link'
import { Split } from '@/components/split'
import { projectsQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
const pageService = new SanityPageService(projectsQuery)

export default function Projects(initialData) {
  const { data: { projects }  } = pageService.getPreviewHook(initialData)()
  const colors = [
    'bg-green text-gray-dark selection:bg-gray-dark selection:text-green',
    'bg-gray text-gray-dark selection:bg-gray-dark selection:text-gray',
    'bg-gray-light text-gray-dark selection:bg-gray-dark selection:text-gray-light',
    'bg-gray-dark text-opacity-80 text-gray-light selection:bg-gray-light selection:text-gray-dark'
  ]

  const [colorPosition, setColorPosition] = useState(0);
  const [colorContext, setColorContext] = useContext(ColorContext);

  function colourSwitcherClick() {    
    if (colorPosition == colors.length - 1) {
      setColorPosition(0);
      setColorContext(colors[0]);
    } else {
      setColorPosition(colorPosition + 1)
      setColorContext(colors[colorPosition + 1]);
    }
  }

  return (
    <Layout>
      <NextSeo title="Projects" />

      <LazyMotion features={domAnimation}>
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <m.div className={`p-3 md:p-4 xl:p-5 md:pb-3 xl:pb-4 flex flex-wrap transition-colors ease-in-out duration-500 h-full bg-white`}>
            <Header />

            <div className="mb-auto w-full relative z-40 pt-12 md:pt-10 xl:pt-14 pb-[20vw] min-h-[100vh]">
              <m.article variants={fade} className="w-full">
                <div className="grid grid-cols-12 gap-5 md:gap-8 xl:gap-10">
                  {projects.map((e,i) => {
                    return (
                      <Link href={`/projects/${e.slug.current}`} key={i}>
                        <a className="col-span-12 md:col-span-6 group">
                          <div className="relative overflow-hidden w-full h-[70vw] md:h-[34vw] mb-3 md:mb-2">
                            <SanityImage image={e.teaserImage} alt={e.title} className="transition-transform ease-in-out duration-[1000ms] group-hover:scale-[1.033]" />
                          </div>

                          <span className="block text-base uppercase mb-[2px]"><span className="block overflow-hidden"><m.span variants={reveal} className="block">BH.0{i+1}</m.span></span></span>
                          <div className="relative overflow-hidden">
                            <h2 className="text-[28px] md:text-[33px] xl:text-[42px] leading-none md:leading-none xl:leading-none mb-0 pb-0 flex"><Split>{e.title}</Split></h2>
                          </div>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </m.article>
            </div>

            <m.footer variants={fade} className="w-full mt-auto relative z-40 md:flex md:items-end md:justify-end">

              <div className="md:flex md:space-x-5 flex-1">
                <div>
                <a href="tel:07958813739" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                    0795 881 3739 <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                  </m.span>
                </a>
                </div>
                <div>
                <a href="mailto:hello@bhudearchitects.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                  hello@bhudearchitects.co.uk <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                  </m.span>
                </a>
                </div>

                <a href="https://www.instagram.com/bhude_architects/" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                  <m.span variants={reveal} className="block">
                    @bhude_architects <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                  </m.span>
                </a>
              </div>

              <span className="hidden md:block text-right mb-[3px]">2024 &copy; All Rights Reserved</span>

              <span className="block md:hidden mt-[3px] text-[14px]">2024 &copy; All Rights Reserved</span>
            </m.footer>
          </m.div>
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