import React from "react";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = () => {
  return (
    <div className="w-screen h-screen flex flex-row flex-wrap p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-4 antialiased">
          <div className="md:w-1/2  w-full">
            <a href="https://sandovalrd.website/" target="_blank" rel="noreferrer">
              <img
                className="rounded-lg shadow-lg antialiased hover:opacity-80 cursor-pointer transition-all duration-500"
                src="img/porfolio.png"
              />
            </a>
          </div>
          <div className="md:w-1/2 w-full px-3 flex flex-row flex-wrap">
            <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-xl text-white leading-tight">Project</div>
              <div className="text-sm text-gray-300 text-left">
                Web portfolio available to show the profile and projects of the developer.
              </div>

              <div className="text-base text-white leading-tight mt-4">Deployment</div>

              <div className="inline-flex text-sm text-gray-300 hover:text-gray-400 cursor-pointer">
                <span className="border-b border-dashed border-gray-500 pb-1">
                  <a href="https://porfolio-cyan.vercel.app/" target="_blank" rel="noreferrer">
                    porfolio-cyan.vercel.app/
                  </a>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-3">
                <div className="grid grid-cols-1">
                  <div className="text-base text-white leading-tight">State</div>

                  <div className="text-sm text-gray-300 leading-tight mt-1">
                    <div className="w-2.5 h-2.5 inline-flex rounded-full bg-yellow-500 ">
                      <div className="w-2.5 h-2.5 inline-flex rounded-full bg-yellow-500 animate-ping"></div>
                    </div>
                    <p className="inline-flex ml-2">In progress</p>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white mt-1">Created</div>
                  <div className="text-sm text-gray-300 leading-tight">2 days ago</div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white">Branch</div>
                  <div className="text-sm text-gray-300 leading-tight mt-1">
                    <span className="w-5 h-5 inline-flex">
                      <FaGithub />
                    </span>
                    <div className="inline-flex ml-1 text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                      <a
                        href="https://github.com/sandovalrd/porfolio/tree/main"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="border-b border-dashed border-gray-500 pb-1">Main</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white mt-1">Type</div>
                  <div className="text-sm text-gray-300 leading-tight">Frontend</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
