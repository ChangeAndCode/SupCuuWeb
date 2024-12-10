import Image from "next/image"
import BtnCT from "./BtnCT"

const CardCorporates = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div>
        <Image
            src="/CT/cuarta.png"
            alt="Company Logo"
            width={470}
            height={370}/>
    </div>
    <div className="lg:transform lg:translate-x-[2rem] lg:translate-y-[.9rem] text-center space-y-4">
        <BtnCT buttonText="CORPORATES PARTNERS"/>
        <div>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">want to promote</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">your calls,</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">fund projects,</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">or collaborate?</p>
        </div>
    </div>
</div>
  )
}

export default CardCorporates