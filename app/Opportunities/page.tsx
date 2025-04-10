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

  const {
    opportunitiesTitle,
    wantToStayUpdatedTitle,
    wantToStayUpdatedText,
  } = opportunitiesData;

  return (
    <>
      <div
        className="
        xs:py-24 sm:py-24 md:py-24 lg:py-36 xl:py-22 2xl:py-32 
        xs:px-5 sm:px-10 md:px-20 lg:px-28 xl:px-16 2xl:px-20 
        bg-[#EDEFF0]"
      >
        <div className="max-w-[1500px] mx-auto">
          <h2
            className="
          text-ColorPrincipal 
          font-PerformanceMark 
          xs:text-[45px] xs:leading-[3rem]
          sm:text-[55px] sm:leading-[4rem]
          md:text-[85px] md:leading-[6rem]
          lg:text-[105px] lg:leading-[7rem]
          xl:text-[165px] xl:leading-[10rem]
          2xl:text-[202px] 2xl:leading-[13rem]
          w-3/5
          "
          >
            {opportunitiesTitle}
          </h2>
        </div>
        <div className="max-w-[1500px] mx-auto">
          <CardsContainer />
        </div>
        <div className="max-w-[1500px] mx-auto">
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
