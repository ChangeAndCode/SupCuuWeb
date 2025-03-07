import dynamic from "next/dynamic";
import ClientForm from "./components/ClientForm";

// Only keep dynamic imports for non-critical components
const ContactUs = dynamic(() => import("./components/ContacUs"), {
  loading: () => (
    <div className="md:w-5/12 h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
  ),
});

const RedesSociales = dynamic(() => import("./components/RedesSociales"), {
  loading: () => (
    <div className="h-[200px] animate-pulse bg-gray-200/20 rounded-lg" />
  ),
});

export default function Form() {
  return (
    <>
      <ClientForm />
      <div className="relative bg-ColorPrincipal px-[2rem] xs:pt-10 md:px-[3rem] lg:px-0 pb-[10rem] z-30 ">
        <div className="flex flex-col items-center">
          <div className="space-y-8 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12">
            <div className="flex flex-col lg:flex-row justify-between">
              <ContactUs />
              <RedesSociales />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
