import WantToStayUpdated from "./Components/WantToStayUpdated";
import Form from "../form/page";

const pageEvents = () => {
  return (
    <>
      <div className="py-[10rem] px-[7rem]">
        <h2 className="text-[10rem] text-ColorPrincipal font-PerformanceMark w-3/5 leading-[8rem]">
          Events & Opportunities
        </h2>
        <WantToStayUpdated />
      </div>
      <Form />
    </>
  );
};

export default pageEvents;
