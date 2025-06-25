// app/sites/opportunities/page.tsx
import CardsContainer from "./Components/CardsContainer";
import WantToStayUpdated from "./Components/WantToStayUpdated";
import Form from "../form/page";
import { getOpportunitiesData } from "@/lib/Opportunities/opportunitiesData";
import { getLocale } from "@/lib/Localization";

const PageEvents = async () => {
  const locale = await getLocale();
  const opportunitiesData = await getOpportunitiesData(locale);

  if (!opportunitiesData) {
    return <div>Error loading content from Umbraco</div>;
  }

  const { opportunitiesTitle, wantToStayUpdatedTitle, wantToStayUpdatedText } =
    opportunitiesData;

  return (
    <>
      <div
        className="
        xs:pt-32 sm:pt-32 md:pt-32 lg:pt-40 xl:pt-28 2xl:pt-36
        xs:pb-4 sm:pb-24 md:pb-24 lg:pb-36 xl:pb-22 2xl:pb-32 
        xs:px-4 sm:px-10 md:px-20 lg:px-28 xl:px-16 2xl:px-20
        bg-[#EDEFF0]"
      >
        <div className="max-w-[1500px] mx-auto">
          <h2
            className="
            text-ColorPrincipal
            font-PerformanceMark
            break-words
            text-center
            xs:text-4xl xs:leading-tight
            sm:text-5xl sm:leading-tight
            md:text-7xl md:leading-tight
            lg:text-8xl lg:leading-tight
            xl:text-9xl xl:leading-tight
            2xl:text-[120px] 2xl:leading-tight
            "
          >
            {opportunitiesTitle}
          </h2>
        </div>

        {/* Added top margin for spacing below title */}
        <div className="max-w-[1500px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <CardsContainer defaultImage={opportunitiesData.defaultImage} />{" "}
          {/* FilterBy is likely inside this */}
        </div>

        {/* Added top margin for spacing */}
        <div className="max-w-[1500px] mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <WantToStayUpdated
            title={wantToStayUpdatedTitle}
            text={wantToStayUpdatedText}
          />
        </div>
      </div>
      <Form />
    </>
  );
};

export default PageEvents;
