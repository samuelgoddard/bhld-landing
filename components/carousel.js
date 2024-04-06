import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import SanityImageResponsive from './sanity-image-responsive'
import classNames from 'embla-carousel-class-names'
import { m } from 'framer-motion'
import { reveal } from '@/helpers/transitions'
import SanityImage from './sanity-image'

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
          <div className={`w-full relative overflow-hidden mr-auto ${items[currentItem - 1]?.asset.metadata.dimensions.height > (items[currentItem - 1]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[12dvh]' : 'max-w-[25dvh]' }`} style={{ aspectRatio: items[currentItem-1] ? `${items[currentItem-1].asset.metadata.dimensions.width}/${items[currentItem-1].asset.metadata.dimensions.height}` : `1/1` }}>
            { items[currentItem-1] && (
              <button onClick={()=> setCurrentItem(currentItem-1)}>
                {items.map((e,i) => {
                  return items[i -1] && (
                    <SanityImage
                      image={items[i-1]}
                      className={`w-full ${i == currentItem ? 'z-[100] opacity-1' : 'z-[1] opacity-0' }`}
                    />
                  )
                })}
              </button>
            )}
          </div>
        </div>

        <div className="md:hidden fixed top-[25%] h-[50%] left-0 z-[100] w-[40%] flex items-center justify-start p-3 text-xl">
          <button onClick={()=> setCurrentItem(currentItem-1)}>
            {items[currentItem - 1] && (
              <>&larr;</>
            )}
          </button>
        </div>
        
        <div className={`w-[70%] md:w-[38%] relative overflow-hidden max-w-[33dvh] mx-auto ${items[currentItem]?.asset.metadata.dimensions.height > (items[currentItem]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[35dvh]' : 'mt-[20dvh] md:mt-0 md:max-w-[50dvh]' }`}  style={{ aspectRatio: `${items[currentItem].asset.metadata.dimensions.width}/${items[currentItem].asset.metadata.dimensions.height}` }}>
          {/* {JSON.stringify(items[currentItem].asset.metadata.dimensions.height > (items[currentItem].asset.metadata.dimensions.width * 1.75))} */}
          {items.map((e,i) => {
            return (
              <SanityImage
                image={e}
                className={`w-full ${i == currentItem ? 'z-[100] opacity-1' : 'z-[1] opacity-0' }`}
              />
            )
          })}
        </div>
        
        <div className="w-[15%] max-w-[25dvh] ml-auto hidden md:block">
          <div className={`w-full relative overflow-hidden ml-auto ${items[currentItem + 1]?.asset.metadata.dimensions.height > (items[currentItem + 1]?.asset.metadata.dimensions.width * 1.75) ? 'md:max-w-[12dvh]' : 'max-w-[25dvh]' }`} style={{ aspectRatio: items[currentItem+1] ? `${items[currentItem+1].asset.metadata.dimensions.width}/${items[currentItem+1].asset.metadata.dimensions.height}` : `1/1` }}>
            { items[currentItem+1] && (
              <button onClick={()=> setCurrentItem(currentItem+1)}>
                {items.map((e,i) => {
                  return items[i+1] && (
                    <SanityImage
                      image={items[i+1]}
                      className={`w-full ${i == currentItem ? 'z-[100] opacity-1' : 'z-[1] opacity-0' }`}
                    />
                  )
                })}
              </button>
            )}
          </div>
        </div>

        <div className="md:hidden fixed top-[25%] h-[50%] right-0 z-[100] w-[40%] flex items-center justify-end p-3 text-xl">
          <button onClick={()=> setCurrentItem(currentItem+1)}>
            {items[currentItem + 1] && (
              <>&rarr;</>
            )}
          </button>
        </div>
      </div>
    </>
  )
}