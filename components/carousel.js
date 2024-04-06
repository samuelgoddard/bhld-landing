import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import SanityImageResponsive from './sanity-image-responsive'
import classNames from 'embla-carousel-class-names'
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'

export function Carousel({ items }) {

  const [currentItem, setCurrentItem] = useState(0);
  
  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full flex justify-center p-3 md:p-4 xl:p-5 pointer-events-none z-[10]">
        <span className="block leading-[1.045] md:leading-[1.045] xl:leading-[1.045] text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
          <m.span variants={reveal} className="block">{currentItem + 1}/{items.length}</m.span></span>
      </div>
      <div className="fixed inset-0 w-full h-full z-[0] flex flex-wrap items-center justify-center p-3 md:p-4 xl:p-5">
        <div className="w-[15%] max-w-[25dvh] mr-auto hidden md:block">
          <div className={`w-full mr-auto ${items[currentItem - 1]?.asset.metadata.dimensions.height > (items[currentItem - 1]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[12dvh]' : 'max-w-[25dvh]' }`}>
            <button onClick={()=> setCurrentItem(currentItem-1)}>
              {items[currentItem - 1] && (
                <SanityImageResponsive
                  image={items[currentItem - 1]}
                  className="w-full"
                />
              )}
            </button>
          </div>
        </div>
        
        <div className={`w-[70%] md:w-[38%] max-w-[33dvh] mx-auto ${items[currentItem]?.asset.metadata.dimensions.height > (items[currentItem]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[35dvh]' : 'md:max-w-[50dvh]' }`}>
          {/* {JSON.stringify(items[currentItem].asset.metadata.dimensions.height > (items[currentItem].asset.metadata.dimensions.width * 1.75))} */}
          {items[currentItem] && (
            <SanityImageResponsive
              image={items[currentItem]}
              className="w-full"
            />
          )}
        </div>
        
        <div className="w-[15%] max-w-[25dvh] ml-auto hidden md:block">
          <div className={`w-full ml-auto ${items[currentItem + 1]?.asset.metadata.dimensions.height > (items[currentItem + 1]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[12dvh]' : 'max-w-[25dvh]' }`}>
            {items[currentItem + 1] && (
              <button onClick={()=> setCurrentItem(currentItem+1)}>
                <SanityImageResponsive
                  image={items[currentItem + 1]}
                  className="w-full"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}