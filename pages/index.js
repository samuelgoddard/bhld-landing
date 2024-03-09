import Compass from '@/components/compass'
import Div100vh from 'react-div-100vh'
import Layout from '@/components/layout'
import { fade, fadeBg, fadeDelay, reveal, revealDelay } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useState } from 'react'
import Header from '@/components/header'
import { Split } from '@/components/split'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {  
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  const colors = [
    'bg-green text-gray-dark selection:bg-gray-dark selection:text-green',
    'bg-gray text-gray-dark selection:bg-gray-dark selection:text-gray',
    'bg-gray-light text-gray-dark selection:bg-gray-dark selection:text-gray-light',
    'bg-gray-dark text-opacity-80 text-gray-light selection:bg-gray-light selection:text-gray-dark'
  ]

  const [colorPosition, setColorPosition] = useState(0);
  const [currentColorTheme, setCurrentColorTheme] = useState(colors[0]);

  function colourSwitcherClick() {    
    if (colorPosition == colors.length - 1) {
      setColorPosition(0);
      setCurrentColorTheme(colors[0]);
    } else {
      setColorPosition(colorPosition + 1)
      setCurrentColorTheme(colors[colorPosition + 1]);
    }
  }

  return (
    <Layout>
      <NextSeo title={home.title} />
      <LazyMotion features={domAnimation}>
          <Div100vh>
            <m.main
              initial="initial"
              animate="enter"
              exit="exit"
              className={`h-full`}
            >
              <m.div variants={fade} className={`p-3 md:p-4 xl:p-5 flex flex-wrap transition-colors ease-in-out duration-500 h-full ${currentColorTheme}`}>
              
              <Header />

              <m.div variants={fadeBg} className={`absolute inset-0 z-0 w-full h-full overflow-hidden`}>
                <div className={`w-full h-full transition-opacity ease-in-out duration-300 absolute inset-0 ${ currentColorTheme === colors[3] ? 'opacity-75' : 'opacity-100' }`}>
                  <Compass />
                </div>
              </m.div>

              <div className="mb-auto w-full relative z-40 pt-16 md:pt-12 xl:pt-14">
                <article className="w-full">
                  <div className="">
                    <p className="max-w-[25ch] text-[15px] md:text-[18px] xl:text-[20px] leading-tight md:leading-tight xl:leading-tight flex flex-wrap"><Split>{home.introText}</Split></p>
                  </div>
                </article>
              </div>

              <m.footer variants={fade} className="w-full mt-auto relative z-40 flex flex-wrap md:flex md:items-end">
                <div className="md:flex md:space-x-3 order-2 md:order-1 w-full md:w-auto">
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

                <span className="block md:ml-auto leading-tight md:leading-tight xl:leading-tight text-[13px] md:text-[22px] xl:text-[28px] relative overflow-hidden order-1 md:order-2">
                  <button onClick={() => colourSwitcherClick()} className="block outline-none w-[18px] md:w-[25px] h-[18px] md:h-[25px] border border-current rounded-full mb-3 md:mb-0 relative group">
                    <div className="absolute inset-0 flex items-center justify-center translate-y-1/2">
                      <div className="w-full h-[1px] border-b border-current -rotate-45 transition-transform ease-in-out duration-500 scale-x-0 group-hover:scale-x-150 origin-bottom-left"></div>
                    </div>
                  </button>
                </span>
              </m.footer>
            </m.div>
          </m.main>
        </Div100vh>
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