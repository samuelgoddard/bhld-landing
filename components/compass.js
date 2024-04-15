export default function Compass() {

  return (
    <div className="absolute w-full h-full">

      {/* Circle */}
      <div className="absolute inset-0 flex items-center ml-[33vw] md:ml-[30vw]">
        <div className="w-[50vw] md:w-[40vw] h-[50vw] md:h-[40vw] rounded-full border border-current"></div>
      </div>

      <div className="absolute inset-0">
        <div className="grid grid-cols-12 grid-rows-2 w-full h-full">
          {/* Quadrant / TL */}
          <div className="border-current border-b border-r col-span-7 md:col-span-6 row-span-1"></div>
          
          {/* Quadrant / TR */}
          <div className="border-current border-b col-span-5 md:col-span-6 row-span-1 relative overflow-hidden">
            {/* Hand */}
            <div className="w-[1px] h-full border-r border-current rotate-[45deg] origin-bottom-left absolute inset-o scale-y-[180]"></div>
          </div>
          
          {/* Quadrant / BL */}
          <div className="border-current border-r col-span-7 md:col-span-6 row-span-1"></div>
          {/* Quadrant / BR */}
          <div className="border-current col-span-5 md:col-span-6 row-span-1"></div>
        </div>
      </div>
    </div>
  )
}
