import Collabs from "./Components/collabs";
import Header from "./Components/header";
import Grid from "./Components/Grid";
import Image from "next/image";
import InnovationForm from "./Components/ContactForm";
import ContacUs from "../form/components/ContacUs";
import RedesSociales from "../form/components/RedesSociales";

export default function Together() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="mt-[-5rem]">
        <Collabs />
      </div>
      <div className="flex bg-gray-100 min-h-[50vh] pb-[15vh] items-center justify-center relative flex-col">
        <h1 className="font-PerformanceMark w-full text-center text-ColorPrincipal text-[8vw] z-0 leading-[0.5] top-[40] relative">
          IF YOU&rsquo;RE LOOKING TO
        </h1>
        <h1 className="font-PerformanceMark w-full text-center text-white text-[8vw] z-10 leading-[1] relative -top-2">
          IF YOU&rsquo;RE LOOKING TO
        </h1>
      </div>

      <div
        className="bg-[url('/Bg/bglandin.webp')] 
    bg-no-repeat bg-center 
    bg-cover w-full md:bg-[length:180vw_100%] mt-[-15rem] 
    pt-[8rem] md:pt-[15rem] pb-[5rem] md:pb-[10rem] relative justify-center items-center overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:right-0 md:transform-none md:mt-[-1rem] md:mr-[9rem] z-20">
          <div className="relative w-[300px] md:w-[400px] lg:w-[600px]">
            <Image
              src="/ifyou.webp"
              alt=""
              width={600}
              height={700}
              className="w-full h-auto"
            />
            <h2 className="font-PerformanceMark text-center text-white text-[3.5vw] sm:text-[3vw] md:text-[2.5vw] lg:text-[2vw] whitespace-nowrap absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[90%]">
              IF YOU&rsquo;RE LOOKING TO:
            </h2>
          </div>
        </div>

        <div className="absolute bottom-[20%] sm:bottom-[15%] md:bottom-0 left-0 ml-[0.5rem] sm:ml-[1rem] mb-[-7rem] z-10">
          <Image
            src="/CintaTrasparente.webp"
            alt=""
            width={500}
            height={500}
            className="w-[200px] sm:w-[250px] md:w-[350px] lg:w-[500px] h-auto rotate-[30deg]"
          />
        </div>

        <div className="max-w-[1400px] mx-auto xl:px-40 md:px-4 px-2 mt-[2rem] md:mt-0">
          <Grid />
        </div>
      </div>
      <div className="mt-[-7rem]">
        {/* Add margin top for spacing */}
        <InnovationForm />
      </div>
      <footer className="relative bg-ColorPrincipal rounded-t-7xl px-8 py-16">
        <div className="absolute top-[-4rem] left-16 md:left-40">
          <Image
            src="/logoE.webp"
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
            quality={80}
          />
        </div>

        <div className="container mx-auto pt-6 max-w-[1066px]">
          <div className="flex flex-col lg:flex-row justify-between">
            <ContacUs />
            <RedesSociales />
          </div>
        </div>
      </footer>
    </>
  );
}
