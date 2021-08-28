import React from "react";

export const ExpeienceCard = (props: any) => {
  const { job, company, content, image, date, web } = props;
  return (
    <div>
      <div className="absolute -mt-1 -ml-1">
        <div className="w-3 h-3 bg-gray-500 dark:bg-yellow-500 rounded-full ">
          <div className="w-3 h-3 bg-gray-500 dark:bg-yellow-500 rounded-full  animate-ping"></div>
        </div>
      </div>
      <div className="max-w-sm sm:max-w-md bg-white dark:bg-gray-200 border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-xl">
        <div id="header" className="flex items-center mb-4">
          <img alt="avatar" className="w-20 border-gray-300 rounded-lg shadow-sm" src={image} />
          <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="font-semibold text-base">
              {job}
            </h4>
            <div className="flex">
              <a
                href={web}
                target="_blank"
                rel="noreferrer"
                id="job"
                className="flex hover:text-yellow-500 text-lg dark:text-yellow-500 font-light text-gray-500"
              >
                {company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-3 mt-2 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <h5 id="date" className="text-sm font-light text-gray-400 dark:text-gray-600">
              {date}
            </h5>
          </div>
        </div>
        <div id="quote">
          <p className="italic text-gray-600 text-sm text-justify">{content}</p>
        </div>
      </div>
    </div>
  );
};
