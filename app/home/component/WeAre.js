import Image from "next/image"


const WeAre = () => {
  return (
    <div className="overflow-hidden">
        <h2 className="text-ColorPrincipal font-PerformanceMark translate-x-5 md:translate-x-[8rem] mac:translate-x-[8rem] lg:translate-x-[16rem] -mb-[10rem] md:-mb-[13rem] mac:-mb-[14rem] xl:-mb-[18rem]  text-[6rem] md:text-[8rem] mac:text-[15rem] xl:text-[20rem]">We are</h2>
        <div className="flex items-center h-screen bg-[url('/bgWeAre.png')] bg-no-repeat bg-center bg-[length:120vw_100%] z-10 relative mac:px-[10rem] lg:px-[15rem] px-4">
            <p className="uppercase text-white text-2xl md:text-[2.3rem] mac:text-[2.5rem] lg:text-[3rem] w-full lg:w-8/12 leading-[1.7rem] md:leading-[2.7rem] xl:leading-[3rem]">
                a collective organization designed to boost tech entrepreneurship in Chihuahua. <span className="font-bold">By connecting with us, you access an entire ecosystem</span> ready to support you at any stage of your entrepreneurial journey—whether to grow your own venture, invest, or strengthen the ecosystem.
            </p>
        </div>
    </div>
  )
}

export default WeAre