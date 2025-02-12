// FormStatus.tsx
'use client';

interface FormStatusProps {
  isSubmitting: boolean;
  submitError?: string | null;
  isSuccess?: boolean;
  defaultText?: string;
  submittingText?: string;
  successText?: string;
  errorText?: string;
}

export const FormStatus = ({
  isSubmitting,
  submitError,
  isSuccess,
  defaultText = "SEND",
  submittingText = "SENDING...",
  successText = "SUCCESS!",
  errorText = "SOMETHING WENT WRONG..."
}: FormStatusProps) => {
  const getButtonText = () => {
    if (isSubmitting) return submittingText;
    if (isSuccess) return successText;
    return defaultText;
  };

  const getButtonClasses = () => {
    const baseClasses = "w-full font-pragmatica uppercase rounded-2xl py-4 transition-colors disabled:cursor-not-allowed";
    if (isSuccess) return `${baseClasses} bg-green-500 text-white disabled:opacity-100`;
    if (submitError) return `${baseClasses} bg-red-500 text-white disabled:opacity-100`;
    return `${baseClasses} bg-ColorPrincipal text-white hover:bg-blue-700 disabled:opacity-50`;
  };

  return (
    <>
      {submitError && (
        <div className="bg-red-100 text-red-600 p-4 rounded-2xl font-pragmatica" role="alert">
          {submitError}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={getButtonClasses()}
      >
        {getButtonText()}
      </button>
    </>
  );
};