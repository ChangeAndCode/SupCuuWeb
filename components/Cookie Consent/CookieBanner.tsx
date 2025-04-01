// components/CookieConsent/CookieBanner.tsx
"use client";

import { useState, useEffect } from "react";
import { useCookieConsent } from "@/context/Cookie Consent Context";
import { CookieBannerContent } from "@/types/Cookie Consent";
import { CookieCategoryIdentifier } from "@/types/Cookie Consent";

interface CookieBannerProps {
  content: CookieBannerContent;
}

// Simple SVG Close Icon Component
const CloseIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function CookieBanner({ content }: CookieBannerProps) {
  const { consentStatus, acceptNecessary, acceptSelection } = useCookieConsent();
  const [selectedCategories, setSelectedCategories] = useState<
    CookieCategoryIdentifier[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  useEffect(() => {
    if (consentStatus === "pending") {
      setIsVisible(true);
      setSelectedCategories(
        content.categories
          .filter((category) => category.enabledByDefault)
          .map((category) => category.id)
      );
    } else {
      setIsVisible(false);
      setIsDetailsVisible(false);
    }
  }, [consentStatus, content.categories]);

  const handleToggleCategory = (categoryId: CookieCategoryIdentifier) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleAcceptSelection = () => {
    acceptSelection(selectedCategories);
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    acceptNecessary();
    setIsVisible(false);
  };

  const toggleDetails = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4">
      <div
        className="w-full max-w-3xl 
                 bg-white shadow-lg border border-gray-200
                 p-5
                 rounded-lg
                 relative"
      >
        {/* Close Button */}
        <button
          onClick={handleAcceptNecessary}
          className="absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Close banner and accept necessary cookies"
        >
          <CloseIcon />
        </button>

        {/* Content Area */}
        <div className="mb-4 pr-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            {content.title}
          </h2>
          <div
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: content.description }}
          />
        </div>

        {/* Expandable Categories Section */}
        {isDetailsVisible && content.categories.length > 0 && (
          <div className="mb-4 border-t border-gray-200 pt-4 mt-4">
            <p className="font-medium text-gray-700 mb-2">
              {content.categoriesTitle}
            </p>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2">
              {content.categories.map((category) => (
                <div key={category.id} className="flex items-start">
                  <div className="flex items-center h-5 mt-0.5">
                    <input
                      id={`cookie-${category.id}`}
                      type="checkbox"
                      className="h-4 w-4 text-ColorPrincipal border-gray-300 rounded focus:ring-ColorPrincipal"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleToggleCategory(category.id)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor={`cookie-${category.id}`}
                      className="font-medium text-gray-800"
                    >
                      {category.name}
                    </label>
                    <div
                      className="text-xs text-gray-500"
                      dangerouslySetInnerHTML={{ __html: category.description }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end items-center mt-4">
          <button
            onClick={toggleDetails}
            className="text-sm text-ColorPrincipal hover:underline"
          >
            {isDetailsVisible
              ? content.hideDetailsText
              : content?.customizePreferencesText}
          </button>
          <div className="flex gap-3">
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              {content.acceptNecessaryText}
            </button>
            <button
              onClick={handleAcceptSelection}
              className="px-4 py-2 bg-ColorPrincipal text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              {content.acceptSelectionText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
