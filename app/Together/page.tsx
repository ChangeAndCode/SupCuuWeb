import InnovationEngine from "app/attraction/components/InnovationEngine"
import Collabs from "./Components/collabs"
import Header from "./Components/header"

export default function Together() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Collabs />
            </div>
            <div className="flex bg-gray-100 min-h-[50vh] pb-[15vh] items-center justify-center relative flex-col">
                <h1 className="font-PerformanceMark w-full text-center text-ColorPrincipal text-[8vw] z-0 leading-[0.5] top-[40] relative -top-2">IF YOU'RE LOOKING TO</h1>
                <h1 className="font-PerformanceMark w-full text-center text-white text-[8vw] z-10 leading-[1] relative -top-2">IF YOU'RE LOOKING TO</h1>
            </div>
        </>
    )
}