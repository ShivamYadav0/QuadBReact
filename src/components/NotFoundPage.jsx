import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="fixed inset-y-0 z-[100] top-0 p-5">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-red-700 font-bold mb-8">
          Sorry, the page you're looking for was not found!
        </p>
        <a href="/" className="p-1 rounded-sm btn-grad-vue">
          Go to Home
        </a>
      </div>
      <div className="absolute inset-0 z-0 bg-gray-100"></div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-500 to-green-500"></div>

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <svg
          className="animate-spin h-20 w-20 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20.268A8 8 0 0112 4v8l4.545 2.182-1.09 1.964L12 20.268zm7-9.267c0-2.18-.756-4.182-2-5.768l-3 2.646V12h5zm-2 7.936A7.962 7.962 0 0116 12h4c0 3.042-1.135 5.824-3 7.938l-3-2.647zM5.455 14.182L4.364 12 12 5.455v3.273L7.727 12l4.546 2.182v3.273l-6.364-3.058z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
