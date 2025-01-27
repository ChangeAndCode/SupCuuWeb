"use client";
import React from "react";
import { useState, useEffect } from "react";

import Banner from "./components/Banner";
import ProgramShowCase from "./components/ProgramShowCase";
import CarouselEvents from "./components/CarouselEvents";
import LoadingSpinner from "./components/LoadingSpinner"; // load value
import ErrorFallback from "./components/ErrorFallback"; // error component
import Form from "../form/page";

const pageEvents = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // need an API to upload this page for a profesional purposes.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setHasError(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (hasError) {
    return <ErrorFallback />;
  }
  return (
    <>
      <div
        className="
        max-sm:py-20 sm:py-20 md:py-24 lg:py-10
        max-sm:px-10 sm:px-10 md:px-20 lg:px-28 
        bg-[#EDEFF0]"
      >
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="max-w-[1500px] mx-auto md:mb-20 lg:mb-52 xl:mb-40 2xl:mb-24">
              <Banner />
            </div>
            <div className="max-w-[1500px] mx-auto">
              <ProgramShowCase />
            </div>
            <div className="max-w-[1500px] mx-auto">
              {/* <CarouselEvents /> */}
            </div>
          </>
        )}
      </div>
      <Form />
    </>
  );
};

export default pageEvents;
