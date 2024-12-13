import Image from "next/image";
import BtnCT from "./BtnCT";

const CardStartups = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Image
          src="/CT/segunda.png"
          alt="Company Logo"
          width={560}
          height={460}
        />
      </div>
      <div className="lg:-translate-x-[4rem] lg:translate-y-[.5rem] text-center space-y-4">
        <BtnCT customLines={["STARTUP &", "SCALEUPS"]} />
        <div>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">Need capital</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">or want to</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">strengthen</p>
          <p className="font-PerformanceMark text-ColorPrincipal text-2xl uppercase">your startup?</p>
        </div>
      </div>
    </div>
  );
};

export default CardStartups;
