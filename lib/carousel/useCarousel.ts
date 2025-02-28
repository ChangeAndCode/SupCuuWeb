import { useState, useEffect, useCallback } from "react";

export const useCarousel = (slidesLength: number) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTranslateValue = () => {
    return `${currentIndex * 100}%`;
  };

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesLength - 1 : prevIndex - 1
    );
  };

  const showNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesLength - 1 ? 0 : prevIndex + 1
    );
  }, [slidesLength]);

  useEffect(() => {
    const interval = setInterval(showNext, 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  return {
    currentIndex,
    windowWidth,
    getTranslateValue,
    showPrevious,
    showNext,
  };
}; 