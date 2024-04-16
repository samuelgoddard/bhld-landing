import { fade, reveal } from '@/helpers/transitions';
import { m } from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter();

  return(
    <m.header variants={fade} className="flex flex-wrap items-start w-full md:mb-1 xl:mb-2 fixed top-0 left-0 right-0 p-3 md:p-4 xl:p-5 z-[1000]">
      <h1 className="block leading-[1.045] md:leading-[1.045] xl:leading-[1.045] text-[18px] md:text-[22px] xl:text-[26px] relative overflow-hidden">
        <Link href="/"><a className="block">
          <m.span variants={reveal} className="block">
            Bhude <span className="block md:inline">Architects</span>
          </m.span>
        </a>
        </Link>
      </h1>

      <span className="block ml-auto leading-none md:leading-none xl:leading-none text-[18px] md:text-[22px] xl:text-[26px] relative overflow-hidden">
        <nav>
          <ul className="flex space-x-3 md:space-x-4">
          <li>
            <Link href="/"><a className="group"><m.span variants={reveal} className={`block`}>Home</m.span>
            <span className={`block border-b border-current ${router.asPath == '/' ? 'w-full' : 'w-0'} group-hover:w-full transition-all ease-in-out duration-500`}></span></a></Link>
          </li>
          <li>
            <Link href="/projects"><a className="group"><m.span variants={reveal} className={`block group`}>Projects</m.span>
            <span className={`block border-b border-current ${router.asPath.includes('/projects') ? 'w-full' : 'w-0'} group-hover:w-full transition-all ease-in-out duration-500`}></span></a></Link>
          </li>
          </ul>
        </nav>
      </span>
    </m.header>
  )
}