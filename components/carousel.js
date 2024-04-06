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
      <div className="fixed top-0 left-0 right-0 w-full flex flex-wrap justify-center p-3 md:p-4 xl:p-5 pointer-events-none z-[10]">
        <div className="w-full justify-center flex">
          <div className="block leading-[1.045] md:leading-[1.045] xl:leading-[1.045] text-[18px] md:text-[22px] xl:text-[28px] relative overflow-hidden">
            <m.span variants={reveal} className="block">{currentItem + 1}/{items.length}</m.span>
          </div>
        </div>

        {items[currentItem].caption && (
          <div className="hidden md:flex text-center w-full justify-center">{items[currentItem].caption}</div>
        )}
      </div>

      <div className={`fixed inset-0 w-full h-[100dvg]] z-[0] flex flex-wrap items-end md:items-center justify-center p-3 pb-12 md:pb-4 md:p-4 xl:p-5`}>
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
        {items[currentItem - 1] && (
          <button onClick={()=> setCurrentItem(currentItem-1)} className="md:hidden fixed bottom-0 h-[65%] left-0 z-[100000] w-[40%] flex items-end justify-start p-3 text-xl">
            <>&larr;</>
          </button>
        )}
        
        <div className={`w-[100%] md:w-[38%] relative overflow-hidden md:max-w-[33dvh] mx-auto ${items[currentItem]?.asset.metadata.dimensions.height > (items[currentItem]?.asset.metadata.dimensions.width * 1.45) ? 'max-w-[35dvh] md:max-w-[35dvh]' : 'md:mt-0 md:max-w-[50dvh]' }`}  style={{ aspectRatio: `${items[currentItem].asset.metadata.dimensions.width}/${items[currentItem].asset.metadata.dimensions.height}` }}>
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
        
        {items[currentItem + 1] && (
          <button onClick={()=> setCurrentItem(currentItem+1)} className="md:hidden fixed bottom-0 h-[65%] right-0 z-[100000] w-[40%] flex items-end justify-end p-3 text-xl">
            <>&rarr;</>
          </button>
        )}

        
        <div className="flex md:hidden absolute bottom-0 p-3 left-0 right-0 text-center w-full justify-center">
          {items[currentItem].caption ? (
            <>{items[currentItem].caption}</>
          ) : <>&nbsp;</>}
        </div>
      </div>
    </>
  )
}