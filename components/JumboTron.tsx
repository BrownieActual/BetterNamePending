"use client";

import Link from "next/link";

const JumboTron = ({ title, description, navigation }: JumboTronProps) => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto text-center lg:py-16 border-white border-2 rounded-2xl w-full">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            {description}
          </p>
        )}
        {navigation && (
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href={navigation.path}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
            >
              <p className="text-26 font-ibm-plex-serif font-bold text-black-1">
                {navigation.title}
              </p>
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default JumboTron;
