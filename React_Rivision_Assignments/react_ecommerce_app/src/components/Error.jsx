import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div class="bg-gradient-to-r from-green-500 to-green-200">
        <div class="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
          <div class="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
            <div class="border-t border-gray-200 text-center pt-8">
              <h1 class="text-9xl font-bold text-green-500">404</h1>
              <h1 class="text-6xl font-medium py-8">oops! Page not found</h1>
              <p class="text-2xl pb-8 px-12 font-medium">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link to="/login" class="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                Back to Login
              </Link>
              {/* <button class="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                Contact Us
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
