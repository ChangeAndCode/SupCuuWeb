const ErrorFallback = ({ error }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600">¡Algo salió mal!</h1>
        <p className="text-lg text-gray-700">
          {error?.message || "Intenta recargar la página."}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-ColorPrincipal text-white rounded"
          onClick={() => window.location.reload()}
        >
          Recargar Página
        </button>
      </div>
    </div>
  );
};

export default ErrorFallback;
