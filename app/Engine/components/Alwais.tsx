import BtnCT from "@components/btnct/BtnCT"


const Alwais = () => {
  return (
    <div className="flex flex-col items-center py-[15rem] md:py-[14rem] lg:py-[15rem] text-center">
      <h2 className='text-white font-PerformanceMark text-[3rem] md:text-[4.5rem] lg:text-[6rem]'>Chihuahua</h2>
      <h3 className='text-white font-pragmatica text-[2rem] md:text-[3rem] lg:text-[4rem] w-10/12 md:w-8/12 lg:w-6/12 leading-[2.5rem] md:leading-[3.5rem] lg:leading-[4rem] mb-[2rem] md:mb-[3rem] lg:mb-[4rem]'>Always a Leader in Innovation and Progress</h3>
      <BtnCT Text='Connect with us' variant='outline' />
    </div>
  )
}

export default Alwais
