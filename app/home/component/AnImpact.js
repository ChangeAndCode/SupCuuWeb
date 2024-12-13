

const AnImpact = () => {
  return (
    <div className="relative flex flex-col items-center py-24 lg:py-36 overflow-hidden">
        <div className="relative z-10 top-5 " >
            <div className="flex flex-col items-end ">
                <p className="text-ColorPrincipal uppercase  font-pragmatica text-[4rem] md:text-[6rem] xl:text-[7rem] leading-[3.5rem] md:leading-[5.9rem]  mac:leading-[6rem] xl:leading-[6rem] mac:translate-x-[-9rem]">An impact</p>
                <p className="text-ColorPrincipal uppercase font-pragmatica text-[4rem] md:text-[6rem] xl:text-[7rem] leading-[3.5rem] md:leading-[5.9rem]  mac:leading-[6rem] xl:leading-[6rem] mac:translate-x-[-9rem]">story</p>
            </div>
            </div>
            {/* Texto detrás */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="text-center">
                  <p className="text-[9rem] lg:text-[13.5rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
                  An impact story
                  </p>
                  <p className="text-[9rem] lg:text-[13.5rem] font-PerformanceMark text-white uppercase leading-[9rem] lg:leading-[9rem] whitespace-nowrap">
                  An impact story
                  </p>
              </div>
          </div>
    </div>
  )
}

export default AnImpact
