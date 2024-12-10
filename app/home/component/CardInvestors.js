import Image from "next/image"
import BtnCT from "./BtnCT"

const CardInvestors = () => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div>
        <Image
            src="/CT/tercera.png"
            alt="Company Logo"
            width={390}
            height={290}/>
    </div>
    <div className="lg:transform  lg:translate-y-[3.2rem] text-center space-y-4">
        <BtnCT buttonText="INVESTORS"/>
        <div>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">want to grow</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">your money</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">while supporting</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">chihuahua talent?</p>
        </div>
    </div>
</div>
  )
}

export default CardInvestors