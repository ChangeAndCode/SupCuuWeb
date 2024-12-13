import Image from "next/image"


const Backbone = () => {
  return (
    <div className="relative flex flex-col items-center">
        <div className="absolute mt-[-18.5rem] z-20">
            <Image 
                src="/Team/backbone.png"
                alt="Team Backbone"
                width={1430}
                height={1430}
            />
        </div>
        <div className="absolute z-30 mt-[-6.4rem] md:mt-[4rem] lg:mt-[25rem] px-[2rem]">
            <Image 
                src="/globo.png"
                alt="Team Backbone"
                width={1300}
                height={1300}
            />
            <div className="absolute inset-[3.5rem] md:inset-[6.3rem] lg:inset-[6rem]">
                <p className="text-[.8rem] md:text-[1.6rem] lg:text-[3rem] leading-[3rem] text-ColorPrincipal font-pragmatica uppercase">Hello, I'm Andres.</p>
                <p className="text-[.8rem] md:text-[1.6rem] lg:text-[1.5rem] mb-[1.5rem] text-ColorPrincipal font-pragmatica uppercase">Director of Startup Chihuahua.</p>
                <p className="text-[.8rem] md:text-[1.6rem] lg:text-[1.5rem] text-ColorPrincipal font-pragmatica uppercase mb-[1.5rem]">Do you have a strategic project or are you looking to financially support the ecosystem?</p>
                <button className="text-[1.5rem] font-pragmatica py-3 px-10 text-white bg-ColorPrincipal rounded-full "> Let's schedule a meeting</button>
          </div>
        </div>
    </div>
  )
}

export default Backbone
