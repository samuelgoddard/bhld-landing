import Image from 'next/image'
import sanity from '@/services/sanity'
import { useState } from 'react';
import { useNextSanityImage } from 'next-sanity-image';

export default function SanityImageResponsive({ image, className, alt, priority, quality, sizes, widthOverride, focalPoint }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  const myCustomImageBuilder = (imageUrlBuilder, options) => {
    return imageUrlBuilder
      .width((widthOverride ? widthOverride : options.width) || Math.min(( widthOverride ? widthOverride : options.originalImageDimensions.width), 800))
      .quality(quality ? quality : 85)
      .fit('clip')
  };
  
	const imageProps = useNextSanityImage(sanity.config, image.asset, { imageBuilder: myCustomImageBuilder });

  const attributes = {};

  if (focalPoint?.x && focalPoint?.y) {
    const { x, y } = focalPoint;
    attributes.objectPosition = `${x * 100}% ${y * 100}%`;
  }

  if (image.alt) { attributes.alt = image.alt } else { attributes.alt = 'MISSING ALT TEXT' }
  if (priority) { attributes.priority = true } else { attributes.priority = false }
  if (sizes) { attributes.sizes = sizes }

	return (
    <figure className={`block relative overflow-hidden image  ${className ? className : ''}`}>
      <div className="relative overflow-hidden">
        {/* LQIP */}
        {!priority && (
          <div
            // style={{ backgroundColor: image.asset.metadata.palette ? image.asset.metadata.palette.dominant.background : '#000'  }}
            className={`absolute inset-0 bg-black z-[10] scale-[1.025] transition-opacity ease-[cubic-bezier(0.71,0,0.17,1)] duration-[750ms] ${imageIsLoaded  ? 'opacity-0 delay-[350ms]' : 'opacity-100' }`}
          >
            <Image src={image.asset?.metadata?.lqip} loading="lazy" layout="fill" alt="Placeholder" className=" h-full absolute inset-0 object-cover object-center" />
          </div>
        )}
        {/* LQIP */}

        <div className="">
          <Image
            className={`${className ? className : '' } `}
            {...imageProps}
            {...attributes}
            {...(priority ? {
              priority: true} : {}
            )}
            onLoad={event => {
              const target = event.target;
              if (target.src.indexOf('data:image/gif;base64') < 0) {
                setImageIsLoaded(true)
              }
            }}
          />
        </div>
      </div>
    </figure> 
  )
}
