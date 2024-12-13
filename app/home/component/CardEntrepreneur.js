import Image from "next/image"
import BtnCT from "./BtnCT"

const CardEntrepreneur = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div>
            <Image
                src="/CT/primera.png"
                alt="Company Logo"
                width={490}
                height={390}/>
        </div>
        <div className="text-center lg:translate-y-[1.8rem] space-y-4">
            <BtnCT buttonText="ENTREPRENEUR" />
            <div>
              <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">Ready to</p>
              <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">develop your ideas?</p>
            </div>
        </div>
    </div>
  )
}

export default CardEntrepreneur