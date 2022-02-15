import Compass from '@/components/compass'
import Div100vh from 'react-div-100vh'
import Layout from '@/components/layout'
import { fade, reveal } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useState } from 'react'

export default function Home() {
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
      <NextSeo title="Home" />
     
      <LazyMotion features={domAnimation}>
        <Div100vh>
          <m.main
            initial="initial"
            animate="enter"
            exit="exit"
            className={`p-4 md:p-6 xl:p-7 flex flex-wrap transition-colors ease-in-out duration-500 h-full ${currentColorTheme}`}
          >
            <m.div variants={fade} className={`absolute inset-0 z-0 w-full h-full overflow-hidden`}>
              <div className={`w-full h-full transition-opacity ease-in-out duration-300 ${ currentColorTheme === colors[3] ? 'opacity-75' : 'opacity-100' }`}>
                <Compass />
              </div>
            </m.div>

            <div className="mb-auto w-full relative z-40">
              <m.header variants={fade} className="flex flex-wrap items-start w-full md:mb-1 xl:mb-2">
                <h1 className="block leading-tight md:leading-tight xl:leading-tight text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
                  <m.span variants={reveal} className="block">
                    Bhuler Design <span className="block md:inline">Architects</span>
                  </m.span>
                </h1>

                <span className="block ml-auto leading-none md:leading-none xl:leading-none text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
                  <m.span variants={reveal} className="block">London — UK</m.span>
                </span>
              </m.header>

              <m.article variants={fade} className="w-full">
                <div className="">
                  <a href="mailto:hello@bhulerdesign.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                    <m.span variants={reveal} className="block">
                      hello@bhulerdesign.co.uk <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                    </m.span>
                  </a><br/>

                  <a href="tel:07958813739" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                    <m.span variants={reveal} className="block">
                      0795 881 3739 <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                    </m.span>
                  </a><br/>

                  <a href="https://www.instagram.com/bhuler_design/" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
                    <m.span variants={reveal} className="block">
                      @bhuler_design <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
                    </m.span>
                  </a><br/>
                </div>
              </m.article>
            </div>

            <m.footer variants={fade} className="w-full mt-auto relative z-40 md:flex md:items-end">
              <button onClick={() => colourSwitcherClick()} className="block outline-none w-[18px] md:w-[25px] h-[18px] md:h-[25px] border border-current rounded-full mb-3 md:mb-0 relative group">
                <div className="absolute inset-0 flex items-center justify-center translate-y-1/2">
                  <div className="w-full h-[1px] border-b border-current -rotate-45 transition-transform ease-in-out duration-500 scale-x-0 group-hover:scale-x-150 origin-bottom-left"></div>
                </div>
              </button>

              <span className="block md:ml-auto leading-tight md:leading-tight xl:leading-tight text-[13px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
                <m.span variants={reveal} className="block">&copy; 2022 — All rights reserved</m.span>
              </span>
            </m.footer>
          </m.main>
        </Div100vh>
      </LazyMotion>
    </Layout>
  )
}
