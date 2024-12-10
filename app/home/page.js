import Image from "next/image";
const Home = () => {
  return (
    <>
        <div className="px-8 lg:px-32 py-24 md:py-48">
          <h2 className="font-PerformanceMark text-3xl sm:text-6xl ml-8 lg:ml-16 text-white uppercase">Building a stronger</h2>
          <p className="text-4xl font-pragmatica sm:text-8xl ml-1 lg:ml-2 font-medium text-white uppercase">technology-based</p>
          <p className="text-4xl font-pragmatica sm:text-8xl ml-1 lg:ml-2 font-medium text-white uppercase">entrepreneurial</p>
          <p className="text-4xl font-pragmatica sm:text-8xl ml-1 lg:ml-2 font-medium text-white uppercase">ecosystem</p>
          <p className="font-PerformanceMark text-2xl lg:text-4xl text-white uppercase">in chihuahua</p>
          <Image 
            src="/etiqueta.png"
            width={200}
            height={200}
            alt="We are"
            className="absolute top-[25rem] right-[55rem]"  
          />
        </div>
    </>
  )
}

export default Home;