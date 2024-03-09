import { fade, reveal } from '@/helpers/transitions';
import { m } from 'framer-motion'

export default function Footer() {

  return(
    <m.footer variants={fade} className="w-full mt-auto relative z-40 flex flex-wrap md:flex md:items-end">
      <div className="flex space-x-3 order-2 md:order-1 w-full md:w-auto">
        <a href="tel:07958813739" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
          <m.span variants={reveal} className="block">
            0795 881 3739 <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
          </m.span>
        </a><br/>
        
        <a href="mailto:hello@bhudearchitects.co.uk" target="_blank" rel="noopener noreferrer" className="inline-block leading-tight md:leading-tight xl:leading-tight text-[15px] md:text-[18px] xl:text-[20px] group overflow-hidden relative">
          <m.span variants={reveal} className="block">
          hello@bhudearchitects.co.uk <span className="block border-b border-current w-full group-hover:-translate-x-full transition-transform ease-in-out duration-500"></span>
          </m.span>
        </a>

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
  )
}